import React from "react";
import Image from "next/image";
import { Button } from "./Button";

// Define the interface for the props
interface CourseCardProps {
  imageSrc: string;
  courseName: string;
  courseDescription: string;
  duration: string;
  level: string;
  instructor: string;
}

const CourseCard = ({
  imageSrc,
  courseName,
  courseDescription,
  duration,
  level,
  instructor,
}: CourseCardProps) => {
  return (
    <div className="lg:p-10 p-5 bg-absolute-white border border-white-95 rounded-md">
      <div className="relative w-full lg:h-[265px] h-[170px]">
        <Image
          src={imageSrc}
          alt="Course Image"
          layout="fill"
          objectFit="cover"
          draggable="false"
          className="rounded-md"
        />
      </div>
      <div className="my-6 flex items-center justify-between flex-wrap">
        <div className="mb-4">
          <Button variant="secondary" className="font-medium mr-3 mb-2">
            {duration}
          </Button>
          <Button variant="secondary" className="font-medium">
            {level}
          </Button>
        </div>
        <div>
          <p className="text-grey-30">{`By ${instructor}`}</p>
        </div>
      </div>
      <h6 className="text-grey-15 font-semibold mb-2">{courseName}</h6>
      <p className="text-grey-30 mb-5">{courseDescription}</p>
      <Button variant="secondary" className="font-medium w-full bg-white-97">
        Get it Now
      </Button>
    </div>
  );
};

export default CourseCard;
