// pages/blog/[slug].tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import "../blog.css"
import Sidebar from "@/app/component/Sidebar/Sidebar";
import {postMetadata} from "@/pages/api/postMetadata";

const Slug = () => {
    const [post, setPost] = useState<{ data: postMetadata; content: string }>({ data: {
            title: '',
            date: '',
            subtitle: '',
            slug: ''
        }, content: '' });
    const router = useRouter();

    useEffect(() => {
        const fetchPostContent = async () => {
            const { slug } = router.query;

            if (slug) {
                try {
                    const response = await fetch(`/api/getPostContent?slug=${slug}`);

                    if (!response.ok) {
                        throw new Error(`Failed to fetch post content. Status: ${response.status}`);
                    }

                    const data = await response.json();

                    // Ensure the fetched data has the expected structure
                    if (data && data.data && data.content) {
                        setPost(data);
                    } else {
                        console.error('Invalid post content structure:', data);
                    }
                } catch (error) {
                    console.error('Error fetching post content:', error);
                }
            }
        };

        fetchPostContent();
    }, [router.query.slug]);

    return (
        <div>
            <Sidebar/>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article className="prose">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default Slug;
