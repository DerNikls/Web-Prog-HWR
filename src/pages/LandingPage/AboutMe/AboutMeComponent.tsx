// src/pages/LandingPage/AboutMe/AboutMeComponent.tsx
"use client";

import React from 'react';
import Image from "next/image";
import './AboutMeComponent.css';
import NiklasPF from "../../../../public/image/Niklas.jpg"

const AboutMeComponent: React.FC = () => {
    return (
        <div className={"aboutMeComponent"}>
            <div className={"aboutMePicture"}>
                <Image src={NiklasPF} className={"profilePicture"} alt={"Profil-Bild"}></Image>
                <div className={"profileContainer"}>
                    <h1>About me</h1>
                    <p className={"profileList"}>
                        <b>Alter: </b> 24<br/>
                        <b>Wohnort: </b> Berlin<br/>
                        <br/>
                        <b>Tätigkeit: </b> Student in der Fachrichtung Informatik (HWR-Berlin)<br/>
                        <b>Qualifikationen: </b>Abgeschlossene Ausbildung als Fachinformatiker für
                        Systemintegration<br/>
                        <br/>
                        <b>Berufserfahrung: </b><br/>2022 - Deutscher Bundestag - Verwaltung - Dualer
                        Student <br/>
                        2021 - 2022 - Deutscher Bundestag - Verwaltung - IT-Administrator <br/>
                        2019 - 2021 - Deutscher Bundestag - Verwaltung - Auszubildener als Fachinformatiker für
                        Systemintegration <br/>
                    </p>
                    <h2>Weitere Informationen</h2>
                    <p>
                        Diese Webseite dient als Informationsmaterial für das Studienprojekt: LoRaWAN und verknüpft
                        dieses mit dem Studienfach: Web-Programmierung. Es soll als kurze Einführung über die LoRaWAN-Technik
                        und das Projekt dienen und weitere Szenarien aufzeigen. Es soll auch über einen Blog-Beitrag verfügen,
                        wo bei späterer Praxisumsetzung des Projekts LoRaWAN weitere Ereignisse festgehalten werden sollen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
