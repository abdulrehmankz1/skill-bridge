import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/Button";

export function AccordionDemo() {
  return (
    <div className="bg-absolute-white p-12 rounded-xl flex justify-between mb-24">
      <div className=" w-2/6">
        <h4 className="text-grey-15 font-semibold leading-[120%]">
          Frequently Asked Questions
        </h4>
        <p className="text-grey-20 ">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <Button variant="secondary" className="font-medium mt-10">
          See All FAQ’s
        </Button>
      </div>
      <Accordion type="single" collapsible className=" w-2/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
