"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Check, X } from "lucide-react";

const monthlyPlans = [
  {
    name: "Free Plan",
    price: "$0",
    features: [
      { text: "Access to selected free courses.", available: true },
      { text: "Limited course materials and resources.", available: true },
      { text: "Basic community support.", available: true },
      { text: "No certification upon completion.", available: true },
      { text: "Ad-supported platform.", available: true },
      {
        text: "Access to exclusive Pro Plan community forums.",
        available: false,
      },
      { text: "Early access to new courses and updates.", available: false },
    ],
  },
  {
    name: "Pro Plan",
    price: "$79",
    features: [
      { text: "Access to selected free courses.", available: true },
      { text: "Limited course materials and resources.", available: true },
      { text: "Basic community support.", available: true },
      { text: "No certification upon completion.", available: true },
      { text: "Ad-supported platform.", available: true },
      {
        text: "Access to exclusive Pro Plan community forums.",
        available: true,
      },
      { text: "Early access to new courses and updates.", available: true },
    ],
  },
];

const yearlyPlans = [
  {
    name: "Free Plan",
    price: "$0",
    features: monthlyPlans[0].features,
  },
  {
    name: "Pro Plan",
    price: "$799",
    features: monthlyPlans[1].features,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div className="mb-24">
      {/* Section Heading */}
      <div className="grid grid-cols-6 gap-6 items-center mb-16">
        <div className="col-span-4">
          <h3 className="text-grey-15 font-semibold">Our Pricing</h3>
          <p className="text-grey-35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et.
          </p>
        </div>
        <div className="col-span-2 flex justify-end">
          <span className="bg-absolute-white p-3 rounded-lg flex space-x-2">
            <Button
              variant={!isYearly ? "default" : "ghost"}
              className={`font-medium transition-all duration-300 transform ${
                !isYearly ? "scale-105 shadow-lg" : "scale-100"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </Button>
            <Button
              variant={isYearly ? "default" : "ghost"}
              className={`font-medium transition-all duration-300 transform ${
                isYearly ? "scale-105 shadow-lg" : "scale-100"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </Button>
          </span>
        </div>
      </div>

      {/* Section Cards */}
      <div className="bg-absolute-white p-12 rounded-xl flex gap-x-7">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="pt-10 px-6 pb-6 bg-white-99 border border-white-95 rounded-xl w-2/4"
          >
            <h6 className="py-2.5 bg-orange-97 border border-orange-90 mb-0 rounded font-semibold text-center text-grey-15">
              {plan.name}
            </h6>
            <div className="flex items-end justify-center my-12">
              <h1 className="text-grey-15 font-semibold leading-[73%]">
                {plan.price}
              </h1>
              <p className="text-grey-30 font-medium leading-[73%]">
                / {isYearly ? "year" : "month"}
              </p>
            </div>
            <div className="bg-absolute-white border border-white-95 rounded-xl rounded-b-none">
              <h6 className="text-grey-15 font-medium text-center my-6">
                Available Features
              </h6>
              <ul className="mx-7">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center border border-white-95 p-3 rounded-lg mb-5"
                  >
                    <span
                      className={`p-1 rounded-md ${
                        feature.available
                          ? "bg-orange-95"
                          : "bg-transparent border border-white-95"
                      }`}
                    >
                      {feature.available ? <Check /> : <X />}
                    </span>
                    <span className="text-grey-30 ms-3 text-sm">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="font-medium w-full rounded-t-none">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
