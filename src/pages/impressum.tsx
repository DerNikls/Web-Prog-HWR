// src/pages/Impressum.tsx

import React from 'react';
import "./impressum.css";
import {Inter, Montserrat} from "next/font/google";
import Sidebar from "@/app/component/Sidebar/Sidebar";
import Footer from "@/app/component/Footer/footer";

const monte = Montserrat({subsets: ["latin"]})
const inter = Inter({ subsets: ["latin"] });
const ImpressumComponent: React.FC = () => {
    return (
        <div>
            <title>Impressum</title>
                <div className={monte.className}> {/* Set class name based on Montserrat font */}
                    <Sidebar/>
                    <div className="impressumContainer">
                        <div className="impressumText">
                            <h1>Impressum</h1>
                            <p>Impressum und Kontakt für LoRaWAN - Blog.</p>

                            <h2>Kontakt Information</h2>
                            <p>
                                LoRaWAN - Blog<br />
                                Mühlweg 12<br />
                                Berlin, 12587<br />
                                Deutschland<br />
                                Email: webmaster@tnjs.de<br />
                                Phone: +49 1744725000
                            </p>

                            <h2>Verantwortlichende Person für den Inhalt</h2>
                            <p>
                                Niklas Justus Täge<br />
                                Mühlweg 12<br />
                                Berlin, 12587<br />
                                Deutschland<br />
                                Email: admin@tnjs.de<br />
                                Phone: +49 1744725000
                            </p>

                            <h2>Rechtlicher Hinweis</h2>
                            <p>
                                Haftung für Inhalte! Die Inhalte dieser Website wurden sorgfältig geprüft und nach bestem Wissen erstellt. Für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen wird jedoch keine Gewähr übernommen. Haftungsansprüche gegen uns, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern von unserer Seite kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
                            </p>
                        </div>
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

export default ImpressumComponent;