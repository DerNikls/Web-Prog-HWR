// src/pages/blog.tsx

import React, { useEffect, useState } from 'react';
import './blog.css';
import PostPreview from "@/pages/api/postPreview";
import styles from "@/pages/LandingPage/LandingPageComponent.module.css";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import {Inter} from "next/font/google";
import Footer from "@/app/component/Footer/footer";
import {postMetadata} from "@/pages/api/postMetadata";

const inter = Inter({ subsets: ["latin"] });

const BlogPageComponent = () => {
    const [postMetadata, setPostMetadata] = useState([]);

    useEffect(() => {
        const fetchPostMetadata = async () => {
            try {
                const response = await fetch('/api/getPostMetadata');
                const data = await response.json();
                /*console.log('Fetched Post Metadata:', data);*/
                setPostMetadata(data);
            } catch (error) {
                console.error('Error fetching post metadata:', error);
                setPostMetadata([]);
            }
        };

        fetchPostMetadata();
    }, []);

    /*console.log('Post Metadata in State:', postMetadata);*/

    const postPreviews = postMetadata.map((post: postMetadata) => (
        <PostPreview key={post.slug} {...post} />
    ));


    return (
        <div>
            <Sidebar/>
            <div className="relative pb-24">
                <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                    <header className="pt-20 pb-12">
                        <p className="text-2xl text-black text-center">Willkommen zu meinem Studienprojektblog</p>
                    </header>
                    <div className="w-full">
                        <h1 className="text-3xl lg:text-5xl text-center mb-12 text-black">LoRaWAN -
                            Studienprojekt-Blog</h1>
                        <ul className="w-full">{postPreviews}</ul>
                        <hr/>
                        <p className="footerMark">Created by Niklas Täge</p>
                        <video src={require("../../public/video/Blog.webm")} autoPlay muted loop
                               className={styles.video}/>
                    </div>
                </div>
            </div>
            <div className={inter.className}>
                <div className={"footerCon"}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default BlogPageComponent;
