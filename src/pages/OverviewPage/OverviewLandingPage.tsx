import React from "react";
import "./OverviewLandingPage.css";
import Image from "next/image";

class OverviewLandingPage extends React.Component<{ imageSrc: any }> {
    render() {
        let {imageSrc} = this.props;
        return <div className="landing">
            <Image src={imageSrc} alt="LoRaWAN Technology" className="landingImage"/>
            <h1 className="landingTitle">Studienprojekt LoRaWAN - Berliner Hütte</h1>
        </div>

    }
}

export default OverviewLandingPage;