import React from "react";
import "./OverviewLandingPage.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Define OverviewLandingSlider functional component
const OverviewLandingSlider: React.FC<{ imageSrc: any; title: any; subtitle: any; flipped: any }> = ({
                                                                                                         imageSrc,
                                                                                                         title,
                                                                                                         subtitle,
                                                                                                         flipped,
                                                                                                     }) => {
    // Use useInView hook to detect when component is in view
    const { ref, inView } = useInView({
        threshold: 0.4, // Define threshold for visibility detection
    });

    // Function to render content based on 'flipped' prop
    const renderContent = () => {
        // If not flipped, render image on left, content on right
        if (!flipped) {
            return (
                <>
                    <Image src={imageSrc} alt="Overview-1" className="sliderImg" /> {/* Render image */}
                    <div className="sliderContent"> {/* Render content */}
                        <h1 className="sliderTitle">{title}</h1> {/* Title */}
                        <p>{subtitle}</p> {/* Subtitle */}
                    </div>
                </>
            );
        } else { // If flipped, render content on left, image on right
            return (
                <>
                    <div className="sliderContent"> {/* Render content */}
                        <h1 className="sliderTitle">{title}</h1> {/* Title */}
                        <p>{subtitle}</p> {/* Subtitle */}
                    </div>
                    <Image src={imageSrc} alt="Overview-2" className="sliderImg" /> {/* Render image */}
                </>
            );
        }
    };

    // Return JSX for OverviewLandingSlider component
    return (
        <div className={inView ? "slider sliderZoom" : "slider"} ref={ref}> {/* Apply animation class based on visibility */}
            {renderContent()} {/* Render content based on 'flipped' prop */}
        </div>
    );
};

export default OverviewLandingSlider; // Export OverviewLandingSlider component
