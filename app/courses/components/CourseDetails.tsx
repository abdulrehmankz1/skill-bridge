import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Course Type Definition
interface CurriculumItem {
  id: string;
  topic: string;
}

interface Course {
  title: string;
  description: string;
  images: string[];
  duration: string;
  level: string;
  instructor: string;
  curriculum: CurriculumItem[];
}

// Course Data Array
const courses: Course[] = [
  {
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    images: [
      "/assets/images/web-design_1.svg",
      "/assets/images/web-design_2.svg",
      "/assets/images/web-design_3.svg",
    ],
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "By John Smith",
    curriculum: [
      { id: "01", topic: "Introduction to HTML" },
      { id: "02", topic: "Styling with CSS" },
      { id: "03", topic: "Introduction to Responsive Design" },
      { id: "04", topic: "Design Principles for Web" },
      { id: "05", topic: "Building a Basic Website" },
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    images: [
      "/assets/images/ux_2.svg",
      "/assets/images/ux_1.svg",
      "/assets/images/ux_3.svg",
    ],
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "By Emily Johnson",
    curriculum: [
      { id: "01", topic: "Introduction to UI/UX Design" },
      { id: "02", topic: "User Research and Personas" },
      { id: "03", topic: "Wireframing and Prototyping" },
      { id: "04", topic: "Visual Design and Branding" },
      { id: "05", topic: "Usability Testing and Iteration" },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    images: [
      "/assets/images/app_1.svg",
      "/assets/images/app_2.svg",
      "/assets/images/app_3.svg",
    ],
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "By David Brown",
    curriculum: [
      { id: "01", topic: "Introduction to Mobile App Development" },
      { id: "02", topic: "Fundamentals of Swift Programming (iOS)" },
      { id: "03", topic: "Fundamentals of Kotlin Programming (Android)" },
      { id: "04", topic: "Building User Interfaces" },
      { id: "05", topic: "App Deployment and Testing" },
    ],
  },
  {
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    images: [
      "/assets/images/graphic_1.svg",
      "/assets/images/graphic_2.svg",
      "/assets/images/graphic_3.svg",
    ],
    duration: "10 Weeks",
    level: "Beginner",
    instructor: "By Sarah Thompson",
    curriculum: [
      { id: "01", topic: "Introduction to Graphic Design" },
      { id: "02", topic: "Typography and Color Theory" },
      { id: "03", topic: "Layout Design and Composition" },
      { id: "04", topic: "Image Editing and Manipulation" },
      { id: "05", topic: "Designing for Print and Digital Media" },
    ],
  },
  {
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    images: [
      "/assets/images/web_1.svg",
      "/assets/images/web_2.svg",
      "/assets/images/web_3.svg",
    ],
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "By Michael Adams",
    curriculum: [
      { id: "01", topic: "HTML Fundamentals" },
      { id: "02", topic: "CSS Styling and Layouts" },
      { id: "03", topic: "JavaScript Basics" },
      { id: "04", topic: "Building Responsive Websites" },
      { id: "05", topic: "Introduction to Bootstrap and React" },
    ],
  },
];

// CourseDetails Component with Props
const CourseDetails = ({ course }: { course: Course }) => {
  return (
    <div className="p-10 bg-absolute-white rounded-2xl mb-10">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h6 className="text-grey-15 font-semibold">{course.title}</h6>
          <p className="text-grey-35">{course.description}</p>
        </div>
        <div className="col-span-2 flex justify-end">
          <Button asChild variant="secondary" className="font-medium">
            <Link href="/course-details"> View Course</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap py-6">
        {course.images.map((img, index) => (
          <div key={index} className="lg:w-1/3">
            <Image
              src={img}
              alt={`course-image-${index}`}
              width={100}
              height={10}
              draggable="false"
              className="w-[98%]"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <Badge
            variant="outline"
            className="rounded-lg text-grey-35 mr-2 py-2 px-3"
          >
            {course.duration}
          </Badge>
          <Badge
            variant="outline"
            className="rounded-lg text-grey-35 py-2 px-3"
          >
            {course.level}
          </Badge>
        </div>
        <p className="text-grey-15 font-medium">{course.instructor}</p>
      </div>

      <div className="border border-white-95 mt-10 rounded-xl">
        <div className="py-5 px-6 border-b border-white-95">
          <h6 className="font-semibold text-grey-15">Curriculum</h6>
        </div>
        <div className="py-6 px-10 grid grid-cols-5 gap-6">
          {course.curriculum.map((item) => (
            <div
              key={item.id}
              className="w-44 border-r border-white-95 last:border-r-0"
            >
              <h2 className="mb-1 text-grey-15 font-extrabold">{item.id}</h2>
              <p className="text-grey-20 font-medium">{item.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CoursesList Component to Render All Courses
const CoursesList = () => {
  return (
    <div>
      {courses.map((course, index) => (
        <CourseDetails key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
