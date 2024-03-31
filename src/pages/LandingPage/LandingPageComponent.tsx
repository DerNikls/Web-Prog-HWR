import React from 'react';
import Link from 'next/link'; // Import Link component from Next.js for navigation
import "./LandingPageComponent.css"; // Import CSS for styling
import Image from "next/image"; // Import Image component from Next.js
import ScrollDownGif from "../../../public/image/icons8-double-down.gif" // Import scroll down GIF

// Define LandingPageComponent functional component
const LandingPageComponent: React.FC = () => {
    return (
        <div className={"mainCon"}> {/* Main container div */}
            <div className={"overlay"}></div> {/* Overlay div */}
            <div className={"landing_page"}> {/* Container for landing page content */}
                <h1>LoraWan - IoT for everything</h1> {/* Heading */}
                <div className={"buttons"}> {/* Container for navigation buttons */}
                    {/* Link to Blog page */}
                    <Link href={"/blog"}>
                        <button>Blog</button>
                    </Link>
                    {/* Link to Maps page */}
                    <Link href={"/maps"}>
                        <button>Maps</button>
                    </Link>
                </div>
                <div className={"buttons"}> {/* Container for navigation buttons */}
                    {/* Link to Technical page */}
                    <Link href={"/technical"}>
                        <button>Technik</button>
                    </Link>
                    {/* Link to Overview page */}
                    <Link href={"/overview"}>
                        <button>Überblick</button>
                    </Link>
                    {/* Link to Use-case page */}
                    <Link href={"/use-case"}>
                        <button>Nutzung</button>
                    </Link>
                </div>
            </div>
            {/* Video element for background video */}
            <video src={require("../../../public/video/webpage.mp4")} autoPlay muted loop className={"video"}/>
            <div className={"scrollDownContainer"}> {/* Container for scroll down animation */}
                {/* Image component for scroll down animation */}
                <Image src={ScrollDownGif} className={"ScrollDownGif"} alt={"Scroll-Down-Animation"}></Image>
            </div>
        </div>
    );
};

export default LandingPageComponent; // Export LandingPageComponent
