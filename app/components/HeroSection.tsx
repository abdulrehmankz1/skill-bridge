import Image from "next/image";
import React from "react";
import { Button } from "./ui/Button";
import MarqueeSlider from "./ui/MarqueeSlider";

const HeroSection = () => {
  return (
    <div className="lg:my-24 my-20 container mx-auto">
      <div className="bg-white-99 mb-4 border relative border-white-95 py-3 flex items-center justify-around px-6 rounded-lg home_hero_section mx-auto">
        <div className="bg-orange-95 rounded-md p-3 lg:w-12 w-10">
          <Image
            src="/assets/images/hero-icon.svg"
            alt="hero Icon"
            width={24}
            height={24}
            draggable="false"
          />
        </div>
        <h4 className="text-grey-10 font-semibold">
          <span className="text-orange-50">Unlock </span>
          Your Creative Potential
        </h4>
        <div className="absolute -left-9 -top-10">
          <Image
            src="/assets/images/abstract-line.svg"
            alt="abstract line"
            width={45}
            height={40}
            draggable="false"
          />
        </div>
      </div>
      <div className="lg:mx-0 mx-7">
        <h5 className="text-center text-grey-15 font-medium mb-2">
          with Online Design and Development Courses.
        </h5>
        <p className="text-center text-grey-15 font-medium lg:mx-0 mx-2">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex items-center justify-center lg:mt-12 mt-8">
          <Button variant="default" className="font-medium mr-3">
            Explore Courses
          </Button>
          <Button variant="secondary" className="font-medium">
            View Pricing
          </Button>
        </div>
      </div>
      <MarqueeSlider />
      <Image
        src="/assets/images/video-img.svg"
        alt="video image"
        className="lg:px-0 px-4"
        layout="responsive"
        width={100}
        height={100}
        draggable={false}
      />
    </div>
  );
};

export default HeroSection;
