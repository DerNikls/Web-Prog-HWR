import { NextApiRequest, NextApiResponse } from 'next'; // Import Next.js types for API request and response
import matter from 'gray-matter'; // Import gray-matter library for parsing Markdown frontmatter
import fs from 'fs/promises'; // Import promises-based file system module

// Function to get post content from Markdown file
const getPostContent = async (slug: string) => {
    const folder = 'blogs/'; // Define folder where blog post files are located
    const file = `${folder}${slug}.md`; // Construct file path based on slug

    try {
        const content = await fs.readFile(file, 'utf8'); // Read file content asynchronously
        const matterResult = matter(content); // Parse Markdown content using gray-matter
        return matterResult; // Return parsed content including frontmatter and body
    } catch (error) {
        /* console.error('Error reading post content:', error); */ // Uncomment to log error when reading file fails
        return { data: {}, content: '' }; // Return empty data and content if file reading fails
    }
};

// API route handler function
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query; // Extract slug from request query parameters

    // Check if slug is missing or invalid
    if (!slug || Array.isArray(slug)) {
        res.status(400).json({ error: 'Invalid or missing slug parameter' }); // Return error response if slug is missing or invalid
        return;
    }

    const postContent = await getPostContent(slug as string); // Get post content based on slug

    // Check if post content is found
    if (postContent.content) {
        res.status(200).json(postContent); // Return post content if found
    } else {
        res.status(404).json({ error: 'Post not found' }); // Return error response if post content is not found
    }
};
