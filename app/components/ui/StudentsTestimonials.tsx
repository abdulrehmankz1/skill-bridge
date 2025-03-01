"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    name: "Sarah",
    image: "/assets/images/testimonials_user_1.svg",
  },
  {
    id: 2,
    text: "This course transformed my understanding of web design. The hands-on approach made learning enjoyable, and I now feel confident in my skills.",
    name: "John",
    image: "/assets/images/testimonials_user_2.svg",
  },
  {
    id: 3,
    text: "An amazing learning experience! The structured content and engaging instructors helped me build a strong foundation in web design.",
    name: "Emily",
    image: "/assets/images/testimonials_user_3.svg",
  },
];

const StudentsTestimonials = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700, // Smooth animation speed
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enables fade transition instead of sliding
    cssEase: "ease-in-out", // Smooth easing effect
    arrows: false,
  };

  return (
    <div className="container mx-auto w-full my-10 px-4 sm:px-6">
      <div className="mb-6 sm:mb-10 text-left">
        <h5 className="text-grey-15 font-semibold text-lg">Students Testimonials</h5>
        <p className="text-grey-35 text-sm">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>

      {/* Testimonials Slider */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col justify-between rounded-xl bg-absolute-white border border-white-95 p-4 sm:p-6 transition-transform transform-gpu">
            <p className="text-grey-30 p-4 sm:p-6 flex-grow">{testimonial.text}</p>
            <div className="bg-white-99 py-4 sm:py-6 px-6 sm:px-10 border-t border-white-95 flex items-center justify-between rounded-bl-xl rounded-br-xl">
              <span className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} draggable={false} />
                <p className="text-grey-20 font-semibold ml-3">{testimonial.name}</p>
              </span>
              <Button variant="secondary" className="font-medium bg-white-97">
                Read Full Story
              </Button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-end items-center mt-4 sm:mt-6 space-x-4">
        <Button variant="secondary" onClick={() => sliderRef.current?.slickPrev()}>
          <ArrowLeft />
        </Button>
        <Button variant="secondary" onClick={() => sliderRef.current?.slickNext()}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default StudentsTestimonials;
