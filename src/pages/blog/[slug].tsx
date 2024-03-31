import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js for accessing router information
import Markdown from 'markdown-to-jsx'; // Import Markdown component
import "../blog.css"; // Import CSS file for styling
import Sidebar from "@/app/component/Sidebar/Sidebar"; // Import Sidebar component
import {postMetadata} from "@/pages/api/postMetadata"; // Import postMetadata interface for type checking

// Define Slug functional component
const Slug = () => {
    const [post, setPost] = useState<{ data: postMetadata; content: string }>({ // Initialize state for post data and content
        data: {
            title: '',
            date: '',
            subtitle: '',
            slug: ''
        },
        content: ''
    });
    const router = useRouter(); // Get router object using useRouter hook

    useEffect(() => {
        const fetchPostContent = async () => {
            const { slug } = router.query; // Extract slug from router query parameters

            if (slug) { // Check if slug exists
                try {
                    const response = await fetch(`/api/getPostContent?slug=${slug}`); // Fetch post content based on slug

                    if (!response.ok) {
                        throw new Error(`Failed to fetch post content. Status: ${response.status}`); // Throw error if response is not OK
                    }

                    const data = await response.json(); // Parse response data

                    // Ensure the fetched data has the expected structure
                    if (data && data.data && data.content) {
                        setPost(data); // Set post data and content in state
                    } else {
                        console.error('Invalid post content structure:', data); // Log error if fetched data has unexpected structure
                    }
                } catch (error) {
                    console.error('Error fetching post content:', error); // Log error if fetch operation fails
                }
            }
        };

        fetchPostContent(); // Call fetchPostContent function on component mount and when slug changes
    }, [router.query.slug]); // Dependency array to re-run effect when slug changes

    return (
        <div>
            <Sidebar/> {/* Render Sidebar component */}
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1> {/* Render post title */}
                <p className="text-slate-400 mt-2">{post.data.date}</p> {/* Render post date */}
            </div>

            <article className="prose"> {/* Article container */}
                <Markdown>{post.content}</Markdown> {/* Render post content as Markdown */}
            </article>
        </div>
    );
};

export default Slug; // Export Slug component
