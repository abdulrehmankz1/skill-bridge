import React from "react";
import HeroHeading from "../components/ui/HeroHeading";
import HighlightSection from "./components/HighlightSection";
import CTA from "../components/ui/CTA";

const achievements = [
  {
    icon: "/assets/images/crown.fill.svg",
    title: "Trusted by Thousands",
    description:
      "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    icon: "/assets/images/medal.fill.svg",
    title: "Award-Winning Courses",
    description:
      "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    icon: "/assets/images/theatermasks.fill.svg",
    title: "Positive Student Feedback",
    description:
      "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    icon: "/assets/images/bolt.shield.fill.svg",
    title: "Industry Partnerships",
    description:
      "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
  },
];

const ourGoals = [
  {
    icon: "/assets/images/backpack.fill.svg",
    title: "Provide Practical Skills",
    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    icon: "/assets/images/book.closed.fill.svg",
    title: "Foster Creative Problem-Solving",
    description:
      "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    icon: "/assets/images/puzzlepiece.fill.svg",
    title: "Promote Collaboration and Community",
    description:
      "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    icon: "/assets/images/light.beacon.max.fill.svg",
    title: "Stay Ahead of the Curve",
    description:
      "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto my-24">
      <HeroHeading
        heading="About Skillbridge"
        paragraph="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development."
      />
      <HighlightSection
        title="Achievements"
        description="Our commitment to excellence has led us to achieve significant milestones along our journey."
        items={achievements}
      />
      <HighlightSection
        title="Our Goals"
        description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact."
        additionalDescription="Through our carefully crafted courses, we aim to"
        items={ourGoals}
      />
      <CTA
        heading=", let's shape the future of[br] digital innovation"
        highlightedText="Together"
        paragraph="Join us on this exciting learning journey and unlock your potential in design and development."
        buttonText="Join Now"
      />
    </div>
  );
};

export default AboutUs;
