import { NextApiRequest, NextApiResponse } from 'next'; // Import Next.js types for API request and response
import matter from "gray-matter"; // Import gray-matter library for parsing Markdown frontmatter
import { postMetadata } from "./postMetadata"; // Import type definition for post metadata

// Function to fetch post metadata from Markdown files
const getPostMetadata = async (): Promise<postMetadata[]> => {
    const folder = "blogs/"; // Define folder where blog post files are located

    // Check if code is running on the client or server side
    if (typeof window === "undefined") {
        const fs = await import("fs/promises"); // Import promises-based file system module

        const files = await fs.readdir(folder); // Read directory contents asynchronously
        const markdownPosts = files.filter((file) => file.endsWith(".md")); // Filter Markdown files

        // Get metadata from each Markdown file
        const posts = await Promise.all(
            markdownPosts.map(async (fileName) => {
                const fileContents = await fs.readFile(`blogs/${fileName}`, "utf8"); // Read file contents
                const matterResult = matter(fileContents); // Parse frontmatter using gray-matter

                return {
                    title: matterResult.data.title, // Extract title from frontmatter
                    date: matterResult.data.date, // Extract date from frontmatter
                    subtitle: matterResult.data.subtitle, // Extract subtitle from frontmatter
                    slug: fileName.replace(".md", ""), // Extract slug from file name
                };
            })
        );

        return posts; // Return array of post metadata
    }

    return []; // Return empty array if running on the client side
};

// API route handler function
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const posts = await getPostMetadata(); // Fetch post metadata
        res.status(200).json(posts); // Return post metadata as JSON response
    } catch (error) {
        console.error('Error fetching post metadata:', error); // Log error if fetching metadata fails
        res.status(500).json({ error: 'Internal Server Error' }); // Return 500 error response
    }
};
