import React from "react";
import { Clock3 } from "lucide-react";

interface LessonCardProps {
  title: string;
  lessonNumber: string;
  duration: string;
  highlight?: boolean; // Optional highlight for current lesson
}

const LessonCard = ({ title, lessonNumber, duration, highlight }: LessonCardProps) => {
  return (
    <div
      className={`px-6 py-5 border border-white-95 rounded-md mb-4 ${
        highlight ? "ring-2 ring-orange-80" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Title and Lesson */}
        <div className="items-center gap-4">
          <div className="text-grey-20 text-base font-medium">{title}</div>
          <div className="text-grey-35 text-sm">Lesson {lessonNumber}</div>
        </div>

        {/* Right Side: Duration (Prevent Line Break) */}
        <div
          className={`flex items-center text-grey-30 p-2.5 ${
            highlight ? "bg-orange-90" : "bg-white-97"
          } rounded-md whitespace-nowrap`}
        >
          <Clock3 className="mr-2 shrink-0" />
          <span className="shrink-0">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
