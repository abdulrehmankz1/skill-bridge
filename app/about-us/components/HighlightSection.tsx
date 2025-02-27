import React from "react";
import Image from "next/image";

interface HighlightItem {
  icon: string;
  title: string;
  description: string;
  additionalDescription?: string;
}

interface HighlightSectionProps {
  title: string;
  description: string;
  additionalDescription?: string;
  items: HighlightItem[];
}

const HighlightSection = ({
  title,
  description,
  additionalDescription,
  items,
}: HighlightSectionProps) => {
  return (
    <div className="mt-24">
      <div className="mb-10">
        <h5 className="text-grey-20 font-semibold text-center md:text-left">
          {title}
        </h5>
        <p className="text-grey-35 mb-1 text-center md:text-left">
          {description}
        </p>
        {additionalDescription && (
          <p className="text-grey-35 text-center md:text-left">
            {additionalDescription}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item, index) => (
          <div key={index} className="bg-absolute-white p-6 sm:p-10 rounded-xl">
            <div className="p-3.5 rounded-lg border border-orange-90 bg-orange-97 mb-6 w-14 h-14 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                draggable={false}
                className="w-7 h-7 object-contain"
              />
            </div>
            <h6 className="text-grey-15 font-medium mb-2.5 text-center sm:text-left">
              {item.title}
            </h6>
            <p className="text-grey-35 text-center sm:text-left">
              {item.description}
            </p>
            {item.additionalDescription && (
              <p className="text-grey-35 text-center sm:text-left">
                {item.additionalDescription}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightSection;
