import React from "react";
import "./OverviewLandingPage.css";
import Image from "next/image";

// Define OverviewLandingPage class component
class OverviewLandingPage extends React.Component<{ imageSrc: any }> {
    render() {
        // Destructure props to extract image source
        let {imageSrc} = this.props;

        // Render JSX for OverviewLandingPage component
        return (
            <div className="landing"> {/* Container div */}
                {/* Image component for displaying the landing image */}
                <Image src={imageSrc} alt="LoRaWAN Technology" className="landingImage"/>
                {/* Heading for the landing page */}
                <h1 className="landingTitle">Studienprojekt LoRaWAN - Berliner Hütte</h1>
            </div>
        );
    }
}

export default OverviewLandingPage; // Export OverviewLandingPage component