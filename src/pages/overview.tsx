// src/pages/Overview.tsx

import React from 'react';
import styles from './overview.module.css';
import LoRaLanding from "../../public/image/berlinerhuette.jpg";
import LoRa_1 from "../../public/image/overviewSlider/img1.jpg";
import LoRa_2 from "../../public/image/overviewSlider/img2.jpg";
import LoRa_3 from "../../public/image/overviewSlider/img3.jpg";
import LoRa_4 from "../../public/image/overviewSlider/img4.png";
import OverviewLandingPage from "@/pages/OverviewPage/OverviewLandingPage";
import OverviewLandingSlider from "@/pages/OverviewPage/OverviewLandingSlider";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import Footer from "@/app/component/Footer/footer";

const OverviewComponent: React.FC = () => {
    return (
        <div>
            <Sidebar/>
            <OverviewLandingPage imageSrc={LoRaLanding}/>
            <OverviewLandingSlider
                imageSrc={LoRa_1}
                title={'Das Projekt!'}
                subtitle={
                    'In dem Studienprojekt "LoRaWAN" sollen IoT Sensoren an der Berliner Hütte im Zillertal und Umgebung ' +
                    'aufgebaut werden sollen, um dem DAV (Deutscher-Alpen-Verein) und dem Wetterinstitut in Insbruck ' +
                    'Wetterdaten, Wasserdaten, Raumtemperatur und andere nützliche Messungen zu versorgen.' +
                    ' Durch die imense Reichweite der LoRa-Technologie ergbit sich vorallem in einem ruralen Umfeld eine' +
                    ' extreme Reichweite von 10 bis 15km, welches sich besonders in der dortigen Lage als sehr nützlich' +
                    ' erweist. In der Abbildung links ist die LoRa-Technologie im Vergleich zu anderen Funk-Technicken ' +
                    'abgebildet.'
                }
                flipped={false}
            />
            <OverviewLandingSlider
                imageSrc={LoRa_2}
                title={'Ein möglicher Aufbau eines LoRa-Netzes!'}
                subtitle={
                    'In einem LoRa-Netz gibt es view Hauptkomponenten "Sensoren / LoRa-Sensors", "Gateways", "Network-Server" ' +
                    ' und einen "Application-Server". Die Sensoren kommunizieren auschließlich mit einem oder mehreren Gateways.' +
                    ' Diese empfangen die Funksignale und senden die empfangenen Daten per Ethernet-Protokoll über Mobilfunk oder' +
                    ' einer lokalen Internetverbindung zu einem Netzwerk-Server. Der Netzwerk-Server vearbeitet die Daten und dient auch' +
                    ' als Management-Server für Sensoren und Gateways. Die verarbeiteten Daten werden dann per Internet an einen möglichen' +
                    ' Application-Server gesendet, dieser stellt die Informationen dann grafisch per Weboberfläche oder App dar.'
                }
                flipped={true}
            />
            <OverviewLandingSlider
                imageSrc={LoRa_3}
                title={'LoRa-Gateways'}
                subtitle={
                    'Ein LoRa-Gateway ist ein Funkmodul, das als Schnittstelle zwischen LoRa-Endgeräten (Sensoren,' +
                    ' Aktoren) und einem LoRaWAN-Server dient. Es empfängt Daten von den Endgeräten, entschlüsselt sie' +
                    ' (falls erforderlich) und leitet sie an den Server weiter. Der Server kann dann die Daten' +
                    ' analysieren, speichern und visualisieren. LoRa-Gateways nutzen die LoRa-Funktechnologie' +
                    ' (Long Range) für die Kommunikation mit den Endgeräten. LoRa zeichnet sich durch eine hohe' +
                    ' Reichweite und geringe Datenraten aus. Dies macht es ideal für Anwendungen im Internet der Dinge' +
                    ' (IoT), wo Sensordaten in abgelegenen Gebieten oder in Gebäuden mit dicken Wänden erfasst werden' +
                    ' müssen.'
                }
                flipped={false}
            />
            <OverviewLandingSlider
                imageSrc={LoRa_4}
                title={'LoRa-Sensoren'}
                subtitle={
                    'LoRa-Sensoren und -Aktoren sind kompakte Geräte, die für die drahtlose Kommunikation in' +
                    ' LoRaWAN-Netzwerken entwickelt wurden. Sie ermöglichen die Erfassung von Daten (Sensoren) und die' +
                    ' Steuerung von Geräten (Aktoren) im Internet der Dinge (IoT). Sie besitzen einen Mikrocontroller' +
                    ' der die analogen Daten verarbeitet und weiterleitet. Die Batterie-Kapazität sollte vor allem' +
                    ' beachtet werden, da diese sehr lange halten muss. In den meisten Fällen bieten sich Solarmodule und' +
                    ' Akkumulatoren an um den Mikrocontroller weiterhin autark weiterbetreiben zu können.'
                }
                flipped={true}
            />
            <Footer/>
        </div>
    );
};

export default OverviewComponent;