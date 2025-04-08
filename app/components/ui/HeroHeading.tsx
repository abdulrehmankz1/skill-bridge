import React from "react";

// Define the type for the props
interface HeroHeadingProps {
  heading: string;
  paragraph: string;
}

const HeroHeading = ({ heading, paragraph }: HeroHeadingProps) => {
  return (
    <div className="container mx-auto lg:my-24 my-7">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[100px]">
        {/* Heading */}
        <h1 className="lg:text-[48px] text-2xl text-grey-15 font-semibold lg:w-6/12 leading-[110%]">
          {heading}
        </h1>
        {/* Paragraph */}
        <p className="text-grey-35 mt-4 lg:mt-0 lg:w-6/12 leading-[150%]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeroHeading;
