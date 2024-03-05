import React from "react";
import "./OverviewLandingPage.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const OverviewLandingSlider: React.FC<{ imageSrc: any; title: any; subtitle: any; flipped: any }> = ({
                                                                                                         imageSrc,
                                                                                                         title,
                                                                                                         subtitle,
                                                                                                         flipped,
                                                                                                     }) => {
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                    <Image src={imageSrc} alt="Overview-1" className="sliderImg" />
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="sliderContent">
                        <h1 className="sliderTitle">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <Image src={imageSrc} alt="Overview-2" className="sliderImg" />
                </>
            );
        }
    };

    return (
        <div className={inView ? "slider sliderZoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
};

export default OverviewLandingSlider;
