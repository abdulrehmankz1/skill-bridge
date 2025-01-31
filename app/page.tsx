import HeroSection from "./components/HeroSection";
import OurCourses from "./components/OurCourses";
import Benefits from "./components/ui/Benefits";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Benefits />
      <OurCourses />
    </div>
  );
}
