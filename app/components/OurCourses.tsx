// components/OurCourses.tsx
import React from "react";
import { Button } from "./ui/Button";
import CourseCard from "./ui/CourseCard";

const courses = [
  {
    imageSrc: "/assets/images/course_1.svg",
    courseName: "Web Design Fundamentals",
    courseDescription:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
  },
  {
    imageSrc: "/assets/images/course_2.svg",
    courseName: "UI/UX Design",
    courseDescription:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
  },
  {
    imageSrc: "/assets/images/course_3.svg",
    courseName: "Mobile App Development",
    courseDescription:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
  },

  {
    imageSrc: "/assets/images/course_4.svg",
    courseName: "Graphic Design for Beginners",
    courseDescription:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    duration: "10 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
  },
  {
    imageSrc: "/assets/images/course_5.svg",
    courseName: "Front-End Web Development",
    courseDescription:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Adams",
  },
  {
    imageSrc: "/assets/images/course_6.svg",
    courseName: "Advanced JavaScript",
    courseDescription:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    duration: "6 Weeks",
    level: "Advance",
    instructor: "Jennifer Wilson",
  },
];

const OurCourses = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-6 items-center mb-14">
        <div className="col-span-4">
          <h3 className="text-grey-15 font-semibold">Our Courses</h3>
          <p className="text-grey-35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="col-span-2 flex justify-end">
          <Button variant="secondary" className="font-medium">
            View All
          </Button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-2 gap-6 mb-24">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
