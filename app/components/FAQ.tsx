"use client";
import { useState } from "react";

import { Button } from "./ui/Button";
import { ArrowRight, Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

// FAQ Data Array
const faqData = [
  {
    id: "item-1",
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: "item-2",
    question: "What kind of support can I expect from instructors?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certificate that you can download and share.",
  },
  {
    id: "item-3",
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses do not require prerequisites, but some advanced courses may have specific requirements.",
  },
  {
    id: "item-4",
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most courses do not require prerequisites, but some advanced courses may have specific requirements.",
  },
  {
    id: "item-5",
    question: "Can I download the course materials for offline access?",
    answer:
      "Most courses do not require prerequisites, but some advanced courses may have specific requirements.",
  },
];

export function AccordionDemo() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
   <div className="lg:px-0 px-4">
     <div className="bg-absolute-white p-12 rounded-xl flex justify-between flex-wrap lg:mb-24 mb-12">
      <div className="lg:w-2/6 w-full">
        <h4 className="text-grey-15 font-semibold leading-[120%]">
          Frequently Asked Questions
        </h4>
        <p className="text-grey-20">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <Button variant="secondary" className="font-medium mt-10">
          See All FAQ’s
        </Button>
      </div>

      <Accordion
        type="single"
        collapsible
        className="lg:w-2/4 w-full"
        onValueChange={(value) => setOpenItem(value)}
      >
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-white-95 p-10 rounded-xl mb-7"
          >
            <AccordionTrigger className="accordion-trigger grid grid-cols-12 items-center gap-x-3 text-xl text-grey-15 hover:no-underline border-b border-white-95 pb-5">
              <div className="text-left col-span-10">{faq.question}</div>
              <div className="p-3 bg-orange-95 rounded-lg h-12 w-12 flex items-center justify-center ">
                {openItem === faq.id ? <X /> : <Plus />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-10 pb-0 text-grey-15 text-base">
              <p>{faq.answer}</p>
              <div className="py-4 px-6 border border-white-95 rounded-lg bg-white-97 mt-10 flex items-center justify-between">
                <div>Enrollment Process for Different Courses</div>
                <div className="p-3 bg-absolute-white rounded-full h-12 w-12">
                  <ArrowRight />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
   </div>
  );
}
