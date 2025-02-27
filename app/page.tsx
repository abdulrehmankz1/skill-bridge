import { AccordionDemo } from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import OurCourses from "./components/OurCourses";
import PricingCard from "./components/PricingCard";
import Benefits from "./components/ui/Benefits";
import Testimonials from "./components/ui/Testimonials";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <Benefits />
      <OurCourses />
      <Testimonials />
      <PricingCard showHeader={true} />
      <AccordionDemo />
    </div>
  );
}
