import React from "react";
import "./footer.css";
import Link from "next/link";

/*
This file defines the Footer component, which represents the footer section of the application. It consists of various
 links categorized under different sections such as "Links", "Weitere Links", and "Partners". Additionally, it includes
 copyright information and a link to the terms, conditions, and privacy policy.
*/

const Footer=()=>{
    return (
        <div className={"footerComponent"}>
            <div className={"subFooter"}>
                <div className={"subFooterLinks"}>
                    <div className={"subFooterLinksContainer"}> {/* Section for primary links */}
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
                    <div className={"subFooterLinksContainer"}> {/* Section for additional links */}
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
                    <div className={"subFooterLinksContainer"}> {/* Section for external links */}
                        <h1>Partners</h1>
                        <Link className={"link"} href="https://lora-alliance.org/"> {/* external Links to other Hosts*/}
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
                <div className={"subFooterBelow"}> {/* Container for elements below the links, such like Copyright
                 and Privacy */}
                    <div className={"subFooterCopyright"}>
                        <p>
                            @{new Date().getFullYear()} Niklas Täge, Alle Rechte vorbehalten. {/* Getting the current
                             Year and displaying it as Copyright*/}
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