import React from "react";
import HeroHeading from "../components/ui/HeroHeading";
import Image from "next/image";
import ChapterCard from "./components/ChapterCard";

const chapters = [
  {
    chapterNumber: "01",
    chapterTitle: "Introduction to UI/UX Design",
    lessons: [
      {
        title: "Understanding UI/UX Design Principles",
        lessonNumber: "01",
        duration: "45 Minutes",
      },
      {
        title: "Importance of User-Centered Design",
        lessonNumber: "02",
        duration: "1 Hour",
        highlight: true,
      },
      {
        title: "The Role of UI/UX Design in Product Development",
        lessonNumber: "03",
        duration: "45 Minutes",
      },
    ],
  },
  {
    chapterNumber: "02",
    chapterTitle: "User Research and Analysis",
    lessons: [
      {
        title: "Conducting User Research and Interviews",
        lessonNumber: "01",
        duration: "1 Hour",
      },
      {
        title: "Analyzing User Needs and Behavior",
        lessonNumber: "02",
        duration: "1 Hour",
      },
      {
        title: "Creating User Personas and Scenarios",
        lessonNumber: "03",
        duration: "45 Minutes",
      },
    ],
  },
  {
    chapterNumber: "03",
    chapterTitle: "Wireframing & Prototyping",
    lessons: [
      {
        title: "Introduction to Wireframing Tools and Techniques",
        lessonNumber: "01",
        duration: "1 Hour",
      },
      {
        title: "Creating Low-Fidelity Wireframes",
        lessonNumber: "02",
        duration: "1 Hour",
      },
      {
        title: "Prototyping and Interactive Mockups",
        lessonNumber: "03",
        duration: "1 Hour",
      },
    ],
  },
  {
    chapterNumber: "04",
    chapterTitle: "Visual Design Principles",
    lessons: [
      {
        title: "Color Theory and Typography in UI Design",
        lessonNumber: "01",
        duration: "1 Hour",
      },
      {
        title: "Visual Hierarchy and Layout Design",
        lessonNumber: "02",
        duration: "1 Hour",
      },
      {
        title: "Creating a Strong Brand Identity",
        lessonNumber: "03",
        duration: "45 Minutes",
      },
    ],
  },
  {
    chapterNumber: "05",
    chapterTitle: "Usability Testing and Iteration",
    lessons: [
      {
        title: "Usability Testing Methods and Techniques",
        lessonNumber: "01",
        duration: "1 Hour",
      },
      {
        title: "Analyzing Usability Test Results",
        lessonNumber: "02",
        duration: "45 Minutes",
      },
      {
        title: "Iterating and Improving UX Designs",
        lessonNumber: "03",
        duration: "45 Minutes",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="container mx-auto pb-28">
      {/* Hero Section */}
      <HeroHeading
        heading="UI/UX Design Course"
        paragraph="Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX)."
      />
      <Image
        src="/assets/images/course-video.svg"
        alt="course-image"
        width={100}
        height={100}
        draggable="false"
        className="w-full"
      />

      {/* Chapter Cards in Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.chapterNumber} {...chapter} />
        ))}
      </div>
    </div>
  );
};

export default Page;
