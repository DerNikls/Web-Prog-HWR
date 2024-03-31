// src/pages/Maps.tsx
import dynamic from 'next/dynamic'
import React from 'react';
import './maps.css';
import Sidebar from "@/app/component/Sidebar/Sidebar";
import { Inter } from "next/font/google";
import Footer from "@/app/component/Footer/footer";

// Dynamically import OpenStreetMap component to enable server-side rendering (SSR) false
const OpenStreetMap = dynamic(() => import('@/app/component/Map/OpenStreetMap'), {
    ssr: false,
})

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define MapsComponent functional component
const MapsComponent: React.FC = () => {
    return (
        <div className={inter.className}> {/* Set class name based on Inter font */}
            <title>LoRaWAN - Maps</title> {/* Set page title */}
            <main className={"mapsComponent"}> {/* Main section */}
                <Sidebar/> {/* Render Sidebar component */}
                <div className={"mapsComponentContainer"}> {/* Container for maps component */}
                    <div className={"mapsComponentContainerSub"}> {/* Sub-container for maps component */}
                        <h1 className={"textCenter"}>Kartenübersicht</h1> {/* Heading */}
                        <p className={"textCenterPara"}> {/* Paragraph */}
                            Einsatzgebiet im Überblick mit bereits installierten LoRaWAN - Gateways. <br/> {/* Description */}
                            Berliner Hütte - Zillertal: <b>N: 47.02391 | E: 11.81265</b> {/* Location coordinates */}
                        </p>
                    </div>
                    <div className={"mapsDiv"}>
                        <OpenStreetMap/> {/* Render OpenStreetMap component */}
                    </div>
                </div>
            </main>
            <footer className={"footerCon"}>
                <Footer/> {/* Render Footer component */}
            </footer>
        </div>
    );
};

export default MapsComponent;