// src/pages/technical.tsx

import React, { useEffect } from 'react';
import './technical.css';
import Image from "next/image"; // Import CSS module for styling
import img1 from "../../public/image/slider/img1.jpg";
import img2 from "../../public/image/slider/img2.jpg";
import img3 from "../../public/image/slider/img3.jpg";
import img4 from "../../public/image/slider/img4.jpg";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import Footer from "@/app/component/Footer/footer";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


const TechnicalComponent: React.FC = () => {
    useEffect(() => {
        // Execute JavaScript functionality when component mounts
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');

        // Add null check for carouselDom
        if (carouselDom) {
            const SliderDom = carouselDom.querySelector('.carousel .list');
            const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
            const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item');
            const timeDom = document.querySelector('.carousel .time');

            // Add null check for SliderDom and thumbnailBorderDom
            if (SliderDom && thumbnailBorderDom && timeDom && thumbnailItemsDom && thumbnailItemsDom.length > 0) {
                thumbnailBorderDom?.appendChild(thumbnailItemsDom![0]);
                const timeRunning = 800;
                const timeAutoNext = 20000;

                const showSlider = (type: string) => {
                    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
                    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

                    // Add null check and array length check for thumbnailItemsDom
                    if (thumbnailItemsDom && thumbnailItemsDom.length > 0) {
                        if (type === 'next') {
                            SliderDom.appendChild(SliderItemsDom[0]);
                            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                            carouselDom.classList.add('next');
                        } else {
                            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                            carouselDom.classList.add('prev');
                        }

                        clearTimeout(runTimeOut);
                        runTimeOut = setTimeout(() => {
                            carouselDom.classList.remove('next');
                            carouselDom.classList.remove('prev');
                        }, timeRunning);

                        clearTimeout(runNextAuto);
                        runNextAuto = setTimeout(() => {
                            nextDom!.click();
                        }, timeAutoNext);
                    }
                };

                let runTimeOut: NodeJS.Timeout;
                let runNextAuto = setTimeout(() => {
                    nextDom!.click();
                }, timeAutoNext);

                nextDom!.onclick = () => {
                    showSlider('next');
                };

                prevDom!.onclick = () => {
                    showSlider('prev');
                };

                return () => {
                    clearTimeout(runTimeOut);
                    clearTimeout(runNextAuto);
                };
            } else {
                console.error('Slider, Thumbnail Border, Time DOM, or Thumbnail Items DOM not found or empty');
            }
        } else {
            console.error('Carousel DOM not found');
        }
    }, []); // Ensure useEffect runs only once


    return (
        <div>
            <div>
                <Sidebar/>
                <div className="carousel">
                    <div className="list">
                        <div className="item">
                            <Image src={img1} alt={"LoRaWAN - 1"}/>
                            <div className="content">
                                <div className="author">LoRaWAN</div>
                                <div className="title">Low Energy Wide Area Network</div>
                                <div className="topic">Einstieg</div>
                                <div className="des">
                                    LoRaWAN steht für Long Range Wide Area Network und ist eine
                                    Low-Power-Funktechnologie, die speziell für das Internet der Dinge (IoT) entwickelt
                                    wurde. Sie ermöglicht die drahtlose Verbindung von batteriebetriebenen Sensoren und
                                    Geräten über große Distanzen mit einem minimalen Energieverbrauch.
                                </div>
                                <div className="buttons">
                                    <button><Link className="intBut" href={"/overview"}>Mehr sehen</Link></button>
                                    <button><Link className="intBut" href={"https://lora-alliance.org/about-lorawan/"}>External</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img2} alt={"LoRaWAN - 2"}/>
                            <div className="content">
                                <div className="author">LoRaWAN</div>
                                <div className="title">Netzwerk für IoT und Industrie</div>
                                <div className="topic">Vorteile</div>
                                <div className="des">
                                    LoRaWAN punktet mit seiner beeindruckenden Reichweite, die in urbanen Umgebungen
                                    bis zu 15 Kilometer und in ländlichen Gebieten sogar bis zu 50 Kilometer betragen
                                    kann. Die lange Batterielaufzeit von bis zu 10 Jahren zeichnet die Technologie aus
                                    und sorgt für einen minimalen Wartungsaufwand. Hinzu kommen die niedrigen Kosten der
                                    Geräte und die einfache Installation, die LoRaWAN zu einer besonders
                                    wirtschaftlichen Lösung machen.
                                </div>
                                <div className="buttons">
                                    <button><Link className="intBut" href={"/overview"}>Mehr sehen</Link></button>
                                    <button><Link className="intBut" href={"https://lora-alliance.org/about-lorawan/"}>External</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img3} alt={"LoRaWAN - 3"}/>
                            <div className="content">
                                <div className="author">LoRaWAN</div>
                                <div className="title">Smart Cities und Industrie</div>
                                <div className="topic">Anwendungsbereiche</div>
                                <div className="des">
                                    Die Einsatzmöglichkeiten von LoRaWAN sind vielfältig. In Smart Cities findet die
                                    Technologie Anwendung in der Umweltüberwachung, der Steuerung der Straßenbeleuchtung
                                    und der Optimierung der Müllabfuhr. In der Industrie ermöglicht LoRaWAN die
                                    Zustandsüberwachung von Maschinen, die Optimierung von Produktionsprozessen und die
                                    Fernwartung von Anlagen. In der Landwirtschaft kann LoRaWAN zur Überwachung von
                                    Feldern, zur Steuerung der Bewässerung und zur Optimierung der Tierhaltung
                                    eingesetzt werden. Auch im Gebäudemanagement bietet LoRaWAN Vorteile:
                                    Gebäudeüberwachung, Steuerung von Heizung und Lüftung sowie Optimierung des
                                    Energieverbrauchs werden durch die Technologie ermöglicht.
                                </div>
                                <div className="buttons">
                                    <button><Link className="intBut" href={"/overview"}>Mehr sehen</Link></button>
                                    <button><Link className="intBut" href={"https://lora-alliance.org/about-lorawan/"}>External</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img4} alt={"LoRaWAN - 4"}/>
                            <div className="content">
                                <div className="author">LoRaWAN</div>
                                <div className="title">Sensoren, Gateways, Server</div>
                                <div className="topic">Technische Hinweise</div>
                                <div className="des">
                                    LoRaWAN nutzt lizenzfreie Frequenzbänder im ISM-Band (Industrial, Scientific and
                                    Medical) bei 433 MHz, 868 MHz und 915 MHz. Die Datenübertragungsrate liegt im
                                    Bereich von 0,3 kbps bis 50 kbps, was für die meisten IoT-Anwendungen ausreichend
                                    ist. Die Chirp-Spread-Spectrum-Modulation (CSS) sorgt für eine hohe Reichweite und
                                    Robustheit gegen Interferenzen. LoRaWAN bietet verschiedene Sicherheitsmechanismen,
                                    wie z. B. Verschlüsselung und Authentifizierung, um die Daten vor unbefugtem
                                    Zugriff zu schützen.
                                </div>
                                <div className="buttons">
                                    <button><Link className="intBut" href={"/overview"}>Mehr sehen</Link></button>
                                    <button><Link className="intBut" href={"https://lora-alliance.org/about-lorawan/"}>External</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className="item">
                            <Image src={img1} alt={"LoRaWAN - 1 (klein)"}/>
                            <div className="content">
                                <div className="title">
                                    Einstieg
                                </div>
                                <div className="description">
                                    #1
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img2} alt={"LoRaWAN - 2 (klein)"}/>
                            <div className="content">
                                <div className="title">
                                    Vorteile
                                </div>
                                <div className="description">
                                    #2
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img3} alt={"LoRaWAN - 3 (klein)"}/>
                            <div className="content">
                                <div className="title">
                                    Anwendungsbereiche
                                </div>
                                <div className="description">
                                    #3
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={img4} alt={"LoRaWAN - 4 (klein)"}/>
                            <div className="content">
                                <div className="title">
                                    Technische Hinweise
                                </div>
                                <div className="description">
                                    #4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arrows">
                        <button id="prev">
                        </button>
                        <button id="next"></button>
                    </div>
                    <div className="time"></div>
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

export default TechnicalComponent;
