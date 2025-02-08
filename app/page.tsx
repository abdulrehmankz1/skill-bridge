import HeroSection from "./components/HeroSection";
import OurCourses from "./components/OurCourses";
import Pricing from "./components/Pricing";
import Benefits from "./components/ui/Benefits";
import Testimonials from "./components/ui/Testimonials";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Benefits />
      <OurCourses />
      <Testimonials />
      <Pricing />
    </div>
  );
}
