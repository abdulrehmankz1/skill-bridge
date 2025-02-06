import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const Testimonials = () => {
  // Card data array
  const testimonials = [
    {
      id: 1,
      imgSrc: "/assets/images/testimonials_user_1.svg",
      alt: "testimonials_user_1 image",
      title: "Sarah L",
      description:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
      id: 2,
      imgSrc: "/assets/images/testimonials_user_2.svg",
      alt: "testimonials_user_2 image",
      title: "Jason M",
      description:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
      id: 3,
      imgSrc: "/assets/images/testimonials_user_3.svg",
      alt: "testimonials_user_3 image",
      title: "Emily R",
      description:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    },
    {
      id: 3,
      imgSrc: "/assets/images/testimonials_user_4.svg",
      alt: "testimonials_user_4 image",
      title: "Michael K",
      description:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-6 gap-6 items-center mb-14">
        <div className="col-span-4">
          <h3 className="text-grey-15 font-semibold">Our Testimonials</h3>
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

      <div className="mb-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Map through the testimonials array */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-xl bg-absolute-white border border-white-95"
          >
            <p className="text-grey-30 p-10">{testimonial.description}</p>
            <div className="bg-white-99 py-6 px-10 border-t border-white-95 rounded-bl-xl rounded-br-xl rounded-tl-[radius] rounded-tr-[radius] flex items-center justify-between">
              <span className="flex items-center">
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.alt}
                  width={50}
                  height={50}
                  draggable={false}
                />
                <p className="text-grey-20 font-semibold ml-3">
                  {testimonial.title}
                </p>
              </span>
              <Button variant="secondary" className="font-medium bg-white-97">
                Read Full Story
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
