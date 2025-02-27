import React from "react";
import { Button } from "./Button";

interface CTAProps {
  heading: string;
  highlightedText: string;
  paragraph: string;
  buttonText: string;
}

const CTA = ({ heading, highlightedText, paragraph, buttonText }: CTAProps) => {
  return (
    <div className="p-[60px] mt-10 grid grid-cols-12 bg-absolute-white rounded-xl bg-[url('/assets/images/cta-bg.svg')] bg-contain bg-no-repeat bg-[right_20%_center]">
      {" "}
      <div className="col-span-8">
        <h3 className="font-semibold text-grey-15 leading-[120%] mb-3.5">
          <span className="text-orange-50">{highlightedText}</span>
          {heading.split("[br]").map((part, index) => {
            const cleanPart = part.trimStart(); // Left spaces remove karega
            return (
              <React.Fragment key={index}>
                {index === 0 && cleanPart.startsWith(",")
                  ? cleanPart
                  : ` ${cleanPart}`}
                {index !== heading.split("[br]").length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </h3>

        <p className="text-grey-30 leading-[150%]">{paragraph}</p>
      </div>
      <div className="col-span-4 flex items-center justify-end">
        <Button variant="default" className="font-medium" size="lg">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CTA;
