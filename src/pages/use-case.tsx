// src/pages/use-case.tsx

import React, { useEffect, useRef, useState } from "react";
import './use-case.css';
import ParkingBG from "../../public/image/parkinglot.jpg";
import FreiburgK from "../../public/image/Freiburg-Skyline-beleuchtet.jpg";
import number1 from "../../public/image/numbers/number-1.png";
import number2 from "../../public/image/numbers/number-2.png";
import number3 from "../../public/image/numbers/number-3.png";
import number4 from "../../public/image/numbers/number-4.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/app/component/Footer/footer";
import Sidebar from "@/app/component/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

/*
This file defines the UseCaseComponent, which represents a page displaying use cases of LoRaWAN technology. It imports
 necessary dependencies such as React, useEffect, useRef, useState from 'react', and CSS styles from './use-case.css'.
 It also imports images and components like Footer and Sidebar.
The UseCaseComponent contains information about various use cases of LoRaWAN technology with images, text, and animations.
*/

const UseCaseComponent: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null); // Ref for timeline element
    const [animationStarted, setAnimationStarted] = useState(false); // State to track animation status

    // useEffect to trigger animation when timeline is in viewport
    useEffect(() => {
        const timeline = timelineRef.current;
        const handleScroll = () => {
            if (!animationStarted && timeline && isElementInViewport(timeline)) {
                startAnimation();
                setAnimationStarted(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animationStarted]);

    // Function to check if an element is in the viewport
    const isElementInViewport = (element: HTMLElement | null) => {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    // Function to start the animation
    const startAnimation = () => {
        // Add a class to trigger the animation when in viewport
        const timeline = timelineRef.current;
        if (timeline) {
            timeline.classList.add("animate-timeline");
        }
    };

    return (
        <div className={"mainUseCaseBGCon"}>
            <div className={inter.className}><Sidebar/></div>
            <Image className="backgroundImage" src={ParkingBG} alt={"Parkplatz-Hintergrund"}></Image>
            <div className="information-page-content-glas-overlay">
                <div className="information-page-content-glas">
                    <h1>Nutzungsbeispiele von LoRaWAN</h1>
                    <h2>LoRaWAN - Anwendungsbeispiele</h2>
                    <p>
                        LoRaWAN Technologien und IoT Anwendungen lassen sich in Smart Cities vielseitig wiederfinden.
                        Neben Bereichen in der Energie- und Wasserwirtschaft werden sie überall dort eingesetzt, wo
                        keine großen Datenmengen übermittelt oder Echtzeitanalysen benötigt werden, da die
                        Datenübertragungsrate im LoRaWAN auf 50 Kilobit pro Sekunde begrenzt ist. Für die meisten
                        Smart-City-Anwendungen sind weder Videostreams noch Echtzeitdatentransfers notwendig, weshalb
                        LoRaWAN-Netzwerke die perfekte, energiesparende Alternative zu reichweitenschwachen WLAN- und
                        kostenintensiven Mobilfunk-Technologien darstellt.
                    </p>
                    <p>
                        Neben der Anhebung von wirtschaftlichen und ökologischen Standards, ist die Erhöhung der
                        Lebensqualität das vorrangige Hauptanliegen intelligenter Städte. Die folgenden fünf Beispiele
                        zeigen typische Bereiche innerhalb der Infrastruktur von Kommunen und Städten, die durch
                        intelligente IoT-Netzwerke und IoT-Lösungen verbessert werden können.
                    </p>
                    <h2>Long Range Wide Area Network für Kommunen</h2>
                    <p>
                        Anhand unzähliger, miteinander vernetzter Geräte und Systeme können Daten gesammelt und
                        analysiert werden, um eine moderne, leistungsfähige und nachhaltige Infrastruktur aufzubauen.
                    </p>
                    <p>
                        Der große Vorteil der LoRa-Technik liegt in ihrer Flexibilität begründet. LoRaWAN-Netzwerke
                        lassen sich sowohl im Außen- als auch Innen-Bereich ohne komplizierte Implementierung anbringen.
                        Ein weiterer Vorteil von LoRaWAN ist die Nutzung freier Frequenzbänder, für die keine
                        Lizenzgebühren und Mobilfunkkosten anfallen. LoRa-Spezifikationen sind frei verfügbar und werden
                        von der LoRa-Allianz erstellt.
                    </p>
                    <Image src={FreiburgK} className="blogPicture" alt={"Bild von Freiburg"}></Image>
                    <p>
                        Im Gegensatz zu Übertragungstechnologien wie WLAN oder Bluetooth, die eine zu geringe Reichweite
                        aufweisen, um Sensoren und Geräte zu vernetzen, ermöglichen LoRa-Netzwerke eine bidirektionale
                        Kommunikation. Hier ist eine Datenübertragung in beiden Richtungen von Punkt zu Punkt möglich.
                        Sender und Empfänger können gleichzeitig beide Rollen innehaben oder ihre jeweilige Rolle
                        wechseln. Dank bidirektionaler Kommunikation und der Over-the-Air (OTA) Update-Funktion kann ein
                        LoRa-Netzwerk mit einem einfachen Push-Update von öffentlich auf privat und umgekehrt geändert
                        werden.
                    </p>
                    <iframe
                        width="824"
                        height="540"
                        src="https://www.youtube.com/embed/vO7gvEbg0zs"
                        frameBorder="0"
                        allowFullScreen
                        title="Der Recyclingkreislauf von Glas-Verpackungen"
                    ></iframe>
                </div>
                <div className={`timeline ${animationStarted ? "animate-timeline" : ""}`} ref={timelineRef}> {/* Timeline with animations */}
                    <div className="container left-container">
                        <Image src={number1} alt="1"/>
                        <div className="text-box">
                            <h2>Regulierung des Straßenverkehrs</h2>
                            <small>Anwendungsfall #1</small>
                            <p>Smarte Verkehrs- und Ampelregelungen sollen helfen, Ampelphasen effizienter zu
                                koordinieren und Verkehrsstaus zu verringern. Eine Kommunikation zwischen Ampelsignalen
                                und Sensoren in den Kraftfahrzeugen soll es in Zukunft allen Verkehrsteilnehmern
                                ermöglichen, sicher und ohne große Zeitverluste im Straßenverkehr voranzukommen.
                            </p>
                            <span className="left-container-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-container with-delay">
                        <Image src={number2} alt="2"/>
                        <div className="text-box">
                            <h2>Smartes Parken und Parkplatzüberwachung</h2>
                            <small>Anwendungsfall #2</small>
                            <p>Einer Studie des Verbands der Automobilindustrie (VDA) zufolge, verbringen Deutschlands
                                Autofahrer pro Jahr 560 Millionen Stunden mit der Suche eines Parkplatzes. Somit macht
                                der Parkplatzverkehr 20 bis 30 % des Gesamtverkehrs aus. Neben dem Verlust von Zeit
                                und Nerven, verursacht die langwierige Parkplatzsuche auch hohe Treibstoffkosten und
                                umweltschädliche Abgasemissionen. Sensoren können diesbezüglich Abhilfe schaffen. Sie
                                erkennen freie Parkplätze und leiten mithilfe von Lichtzeichenanlagen Autofahrer
                                umgehend zum nächsten freien Parkplatz.
                            </p>
                            <span className="right-container-arrow"></span>
                        </div>
                    </div>
                    <div className="container left-container with-delay">
                        <Image src={number3} alt="3"/>
                        <div className="text-box">
                            <h2>Straßenbeleuchtung</h2>
                            <small>Anwendungsfall #3</small>
                            <p>Sensoren in Straßenleuchten können helfen, Kommunen und Städte flächendeckend zu
                                beleuchten und Ausfälle rechtzeitig zu erkennen. Mithilfe der Sensoren können Leuchten
                                automatisch heller eingestellt oder gedimmt werden und zusätzlich Daten über den
                                Energieverbrauch übermitteln. Dadurch können Geräteausfälle vorhergesehen und
                                rechtzeitig behoben werden.
                            </p>
                            <span className="left-container-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-container with-delay">
                        <Image src={number4} alt="4"/>
                        <div className="text-box">
                            <h2>Abfallmanagement</h2>
                            <small>Anwendungsfall #4</small>
                            <p>Mülltonnen sind „intelligenter“ geworden und reden mehr über ihr Innenleben. Sie geben
                                bescheid, wenn sie geleert werden wollen. Es gibt IoT-Dienstleister, die mit Stadtwerken
                                Smart City LoRaWAN-Netze anbieten. Ein Anbieter ist die DIGIMONDO GmbH in Hamburg.
                                Vernetzte Mülltonnen melden ihre aktuellen Füllstand an die Stadtwerke oder den
                                Entsorgungsdienstleister. Mit diesen Daten planen Müllentsorger ihre Routen für die
                                Abholung. In Österreich wird dies bereits praktikziert. Mit dem klangvollen Namen
                                Friendly Energy wird der digitale Abfalleimer „Big Belly Solar“ betrieben. Die digitalen
                                Mülleimer tragen in ihrem Bauch eine integrierte Müllpresse. So nehmen sie viel mehr Müll
                                auf, der selbständig vom Eimer gepresst wird. Die Energie dafür liefert die Photovoltaik.
                                Der umweltfreundliche Clou: Wenn mehr rein geht, muss seltener abgeholt werden.
                            </p>
                            <span className="right-container-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UseCaseComponent;