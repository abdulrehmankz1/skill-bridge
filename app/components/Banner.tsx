import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-orange-50 py-3 text-center text-absolute-white text-sm rounded-md mx-5 mt-5 flex justify-center items-center">
      Free Courses 🌟 Sale Ends Soon, Get It Now
      <Link href="/">
        <ArrowRight className="ml-6" />
      </Link>
    </div>
  );
};

export default Banner;
