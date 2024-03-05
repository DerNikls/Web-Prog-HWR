// pages/api/getPostContent.ts

import { NextApiRequest, NextApiResponse } from 'next';
import matter from 'gray-matter';
import fs from 'fs/promises';

const getPostContent = async (slug: string) => {
    const folder = 'blogs/';
    const file = `${folder}${slug}.md`;

    try {
        const content = await fs.readFile(file, 'utf8');
        const matterResult = matter(content);
        return matterResult;
    } catch (error) {
        /* console.error('Error reading post content:', error);*/
        return { data: {}, content: '' };
    }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    if (!slug || Array.isArray(slug)) {
        res.status(400).json({ error: 'Invalid or missing slug parameter' });
        return;
    }

    const postContent = await getPostContent(slug as string);

    if (postContent.content) {
        // Return a 200 status code along with the post content
        res.status(200).json(postContent);
    } else {
        // Return a 404 status code if the content is not found
        res.status(404).json({ error: 'Post not found' });
    }
};
