import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BenefitCard = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => (
  <div className="max-w-sm lg:p-10 p-7 bg-absolute-white border border-white-95 rounded-lg">
    <h1 className="mb-7 text-end font-bold text-grey-10">{id}</h1>
    <div>
      <h6 className="mb-2 text-grey-10 font-semibold">{title}</h6>
      <p className="text-grey-30 mb-7">{description}</p>
    </div>
    <div className="flex justify-end">
      <Link
        href="#"
        className="p-3 inline-flex bg-white-99 hover:bg-white-97 border border-white-95 text-orange-50 rounded-md"
      >
        <ArrowUpRight size={35} />
      </Link>
    </div>
  </div>
);

export default BenefitCard;
