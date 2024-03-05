import React from "react";
import "./footer.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const Footer=()=>{
    return (
        <div className={"footerComponent"}>
            <div className={"subFooter"}>
                <div className={"subFooterLinks"}>
                    <div className={"subFooterLinksContainer"}>
                        <h1>Links</h1>
                        <Link className={"link"} href="/impressum">
                            <p>Impressum</p>
                        </Link>
                        <Link className={"link"} href="/blog">
                            <p>Blog</p>
                        </Link>
                        <Link className={"link"} href="/maps">
                            <p>Maps</p>
                        </Link>
                    </div>
                    <div className={"subFooterLinksContainer"}>
                        <h1>Weitere Links</h1>
                        <Link className={"link"} href="/use-case">
                            <p>Nutzen</p>
                        </Link>
                        <Link className={"link"} href="/technical">
                            <p>Technik</p>
                        </Link>
                        <Link className={"link"} href="/overview">
                            <p>Überblick</p>
                        </Link>
                    </div>
                    <div className={"subFooterLinksContainer"}>
                        <h1>Partners</h1>
                        <Link className={"link"} href="https://lora-alliance.org/">
                            <p>LoRa Alliance</p>
                        </Link>
                        <Link className={"link"} href="https://www.semtech.com/">
                            <p>Semtech</p>
                        </Link>
                        <Link className={"link"} href="https://www.thethingsnetwork.org/">
                            <p>The Things Network</p>
                        </Link>
                    </div>
                </div>
                <hr></hr>
                <div className={"subFooterBelow"}>
                    <div className={"subFooterCopyright"}>
                        <p>
                            @{new Date().getFullYear()} Niklas Täge, Alle Rechte vorbehalten.
                        </p>
                    </div>
                    <div className={"subFooterBelowLinks"}>
                        <Link className={"link"} href="/impressum">
                            <div><p>Terms, Conditions & Privacy</p></div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;