// src/pages/Maps.tsx

import dynamic from 'next/dynamic'
import React from 'react';
import './maps.css';
import Sidebar from "@/app/component/Sidebar/Sidebar";
import { Inter } from "next/font/google";
import Footer from "@/app/component/Footer/footer";

const OpenStreetMap = dynamic(() => import('@/app/component/Map/OpenStreetMap'), {
    ssr: false,
})

const inter = Inter({ subsets: ["latin"] });

const MapsComponent: React.FC = () => {
    return (
        <div className={inter.className}>
            <title>LoRaWAN - Maps</title>
            <main className={"mapsComponent"}>
                <Sidebar/>
                <div className={"mapsComponentContainer"}>
                    <div className={"mapsComponentContainerSub"}>
                        <h1 className={"textCenter"}>Kartenübersicht</h1>
                        <p className={"textCenterPara"}>
                            Einsatzgebiet im Überblick mit bereits installierten LoRaWAN -
                            Gateways. <br/>
                            Berliner Hütte - Zillertal: <b>N: 47.02391 | E: 11.81265</b>
                        </p>
                    </div>
                    <div className={"mapsDiv"}>
                        <OpenStreetMap/>
                    </div>
                </div>
            </main>
            <footer className={"footerCon"}>
                <Footer/>
            </footer>
        </div>
    );
};

export default MapsComponent;