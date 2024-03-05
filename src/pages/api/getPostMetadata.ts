// pages/api/getPostMetadata.ts

import { NextApiRequest, NextApiResponse } from 'next';
import matter from "gray-matter";
import { postMetadata } from "./postMetadata";

const getPostMetadata = async (): Promise<postMetadata[]> => {
    const folder = "blogs/";

    if (typeof window === "undefined") {
        const fs = await import("fs/promises");

        const files = await fs.readdir(folder);
        const markdownPosts = files.filter((file) => file.endsWith(".md"));

        // Get gray-matter data from each file.
        const posts = await Promise.all(
            markdownPosts.map(async (fileName) => {
                const fileContents = await fs.readFile(`blogs/${fileName}`, "utf8");
                const matterResult = matter(fileContents);

                return {
                    title: matterResult.data.title,
                    date: matterResult.data.date,
                    subtitle: matterResult.data.subtitle,
                    slug: fileName.replace(".md", ""),
                };
            })
        );

        /*console.log('Posts:', posts);*/
        return posts;
    }

    return [];
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const posts = await getPostMetadata();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching post metadata:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
