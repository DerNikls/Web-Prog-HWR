
import Link from "next/link"; // Import Link component from Next.js for client-side navigation
import { postMetadata } from "./postMetadata"; // Import type definition for post metadata
import "../blog.css"; // Import CSS styles for the blog

// Functional component to render a preview of a blog post
const PostPreview = (props: postMetadata) => {
    return (
        <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            {/* Link to the individual blog post page */}
            <Link className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4" href={`/blog/${props.slug}`}>
                {/* Display post metadata */}
                <p className="uppercase mb-3 font-bold opacity-60">{props.date}</p> {/* Display post date */}
                <h3 className="text-2xl md:text-3xl">{props.title}</h3> {/* Display post title */}
                <p className="mt-3 text-lg opacity-60">{props.subtitle}</p> {/* Display post subtitle */}
                {/* Arrow icon for indicating navigation */}
                <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path className="stroke-current text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 19l7-7-7-7"></path>
                </svg>
            </Link>
        </li>
    );
};

export default PostPreview; // Export the PostPreview component
