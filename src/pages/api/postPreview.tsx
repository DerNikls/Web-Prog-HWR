import Link from "next/link";
import { postMetadata } from "./postMetadata";
import "../blog.css";

const PostPreview = (props: postMetadata) => {
    return (
        <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <Link className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4" href={`/blog/${props.slug}`}>
                <p className="uppercase mb-3 font-bold opacity-60">{props.date}</p>
                <h3 className="text-2xl md:text-3xl">{props.title}</h3>
                <p className="mt-3 text-lg opacity-60">{props.subtitle}</p>
                <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path className="stroke-current text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 19l7-7-7-7"></path>
                </svg>
            </Link>
        </li>
    );
};

export default PostPreview;
