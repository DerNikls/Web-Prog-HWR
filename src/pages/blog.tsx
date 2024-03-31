// src/pages/blog.tsx

import React, { useEffect, useState } from 'react';
import './blog.css';
import PostPreview from "@/pages/api/postPreview";
import "@/pages/LandingPage/LandingPageComponent.css";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import {Inter} from "next/font/google";
import Footer from "@/app/component/Footer/footer";
import {postMetadata} from "@/pages/api/postMetadata";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define BlogPageComponent functional component
const BlogPageComponent = () => {
    // State to store post metadata
    const [postMetadata, setPostMetadata] = useState([]);

    // Fetch post metadata from API when component mounts
    useEffect(() => {
        const fetchPostMetadata = async () => {
            try {
                // Fetch post metadata from API endpoint
                const response = await fetch('/api/getPostMetadata');
                const data = await response.json();
                // Set post metadata in state
                setPostMetadata(data);
            } catch (error) {
                // Log and handle error if fetching fails
                console.error('Error fetching post metadata:', error);
                setPostMetadata([]); // Set empty array if fetching fails
            }
        };

        fetchPostMetadata(); // Call fetchPostMetadata function
    }, []);

    /*console.log('Post Metadata in State:', postMetadata);*/

    // Generate post previews based on fetched post metadata
    const postPreviews = postMetadata.map((post: postMetadata) => (
        <PostPreview key={post.slug} {...post} />
    ));

    // Render BlogPageComponent JSX
    return (
        <div>
            <Sidebar/> {/* Render Sidebar component */}
            {/* Main content section */}
            <div className="relative pb-24">
                <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                    {/* Header section */}
                    <header className="pt-20 pb-12">
                        <p className="text-2xl text-black text-center">Willkommen zu meinem Studienprojektblog</p>
                    </header>
                    {/* Blog title section */}
                    <div className="w-full">
                        <h1 className="text-3xl lg:text-5xl text-center mb-12 text-black">LoRaWAN -
                            Studienprojekt-Blog</h1>
                        {/* Render post previews */}
                        <ul className="w-full">{postPreviews}</ul>
                        <hr/> {/* Horizontal rule */}
                        <p className="footerMark">Created by Niklas Täge</p> {/* Footer mark */}
                        <video src={require("../../public/video/Blog.webm")} autoPlay muted loop
                               className={"video"}/> {/* Video element */}
                    </div>
                </div>
            </div>
            <div className={inter.className}> {/* Set class name based on Inter font */}
                <div className={"footerCon"}>
                    <Footer/> {/* Render Footer component */}
                </div>
            </div>
        </div>
    );
};

export default BlogPageComponent; // Export BlogPageComponent
