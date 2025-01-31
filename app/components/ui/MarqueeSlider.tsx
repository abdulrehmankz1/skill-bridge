import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  const logos = [
    "/assets/images/logo_3.svg",
    "/assets/images/logo_1.svg",
    "/assets/images/logo_2.svg",
    "/assets/images/amazon-logo.svg",
    "/assets/images/adobe-logo.svg",
    "/assets/images/netflix-logo.svg",
    "/assets/images/notion-logo.svg",
  ];

  return (
    <div className="p-6 rounded-lg border border-white-95 bg-absolute-white container mx-auto my-16">
      {/* Marquee Container */}
      <Marquee>
        {logos.map((logo, index) => (
          <div key={index} className={`py-3 px-10 border-r border-grey-30`}>
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={56}
              className="h-10"
              draggable={false}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
