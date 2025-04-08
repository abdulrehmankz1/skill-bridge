import React from "react";
import { Button } from "./Button";
import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    id: "01",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: "02",
    title: "Expert Instruction",
    description:
      "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: "03",
    title: "Diverse Course Offerings",
    description:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: "04",
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    id: "05",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    id: "06",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const Benefits = () => {
  return (
    <div className="lg:pb-24 pb-12 lg:px-0 px-4">
      {/* Section Heading */}
      <div className="grid grid-cols-6 gap-6 items-center lg:mb-14 mb-7">
        <div className="col-span-6 md:col-span-4">
          <h3 className="text-grey-15 font-semibold">Benefits</h3>
          <p className="text-grey-35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 flex justify-start md:justify-end">
          <Button variant="secondary" className="font-medium">
            View All
          </Button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>

    </div>
  );
};

export default Benefits;
