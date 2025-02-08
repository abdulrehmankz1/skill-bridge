import React from "react";
import { Button } from "./ui/Button";

const Pricing = () => {
  return (
    <div className="mb-24">
      {/* Section Heading */}
      <div className="grid grid-cols-6 gap-6 items-center mb-16">
        <div className="col-span-4">
          <h3 className="text-grey-15 font-semibold">Our Pricing</h3>
          <p className="text-grey-35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="col-span-2 flex justify-end">
          <span className="bg-absolute-white p-3 rounded-lg">
            <Button className="font-medium">Monthly</Button>
            <Button variant="ghost" className="font-medium">
              Yearly
            </Button>
          </span>
        </div>
      </div>
      {/* Section Cards */}
      <div className="bg-absolute-white p-12 rounded-xl">
        <div className="pt-10 px-6 pb-6 bg-white-99 border border-white-95 rounded-xl w-2/4">
          <h6 className="py-2.5 bg-orange-97 border border-orange-90 mb-0 rounded font-medium text-center text-grey-15">
            Free Plan
          </h6>
          <div className="flex items-end justify-center my-12">
            <h1 className="text-grey-15 font-semibold leading-[73%]">$0</h1>
            <p className="text-grey-30 font-medium leading-[73%]">/month</p>
          </div>
          <div className="bg-absolute-white border border-white-95 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
