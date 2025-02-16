import React from "react";
import HeroHeading from "../components/ui/HeroHeading";
import CourseDetails from "./components/CourseDetails";

const Courses = () => {
  return (
    <div className="container mx-auto pb-14">
      <HeroHeading
        heading="Online Courses on Design and Development"
        paragraph="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />
      <CourseDetails />
    </div>
  );
};

export default Courses;
