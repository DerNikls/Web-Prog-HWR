// src/pages/LandingPage/LandingPageComponent.tsx
import React from 'react';
import Link from 'next/link';
import styles from "./LandingPageComponent.module.css";
import Image from "next/image";
import ScrollDownGif from "../../../public/image/icons8-double-down.gif"

const LandingPageComponent: React.FC = () => {
    return (
        <div className={styles.mainCon}>
            <div className={styles.overlay}></div>
            <div className={styles.landing_page}>
                <h1>LoraWan - IoT for everything</h1>
                <div className={styles.buttons}>
                    <Link href={"/blog"}>
                    <button>Blog</button>
                    </Link>
                    <Link href={"/maps"}>
                    <button>Maps</button>
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Link href={"/technical"}>
                    <button>Technik</button>
                    </Link>
                    <Link href={"/overview"}>
                    <button>Überblick</button>
                    </Link>
                    <Link href={"/use-case"}>
                    <button>Nutzung</button>
                    </Link>
                </div>
            </div>
            <video src={require("../../../public/video/webpage.mp4")} autoPlay muted loop className={styles.video}/>
            <div className={styles.scrollDownContainer}>
                <Image src={ScrollDownGif} className={styles.ScrollDownGif} alt={"Scroll-Down-Animation"}></Image>
            </div>
        </div>
    );
};

export default LandingPageComponent;