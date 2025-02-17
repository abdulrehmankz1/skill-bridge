import React from "react";
import LessonCard from "./LessonCard";

interface Lesson {
  title: string;
  lessonNumber: string;
  duration: string;
  highlight?: boolean;
}

interface ChapterCardProps {
  chapterNumber: string;
  chapterTitle: string;
  lessons: Lesson[];
}

const ChapterCard = ({ chapterNumber, chapterTitle, lessons }: ChapterCardProps) => {
  return (
    <div className="bg-absolute-white rounded-xl p-10 mb-5">
      <h1 className="grey-15 font-bold leading-[40%] text-end">{chapterNumber}</h1>
      <h6 className="text-grey-20 font-semibold my-7">{chapterTitle}</h6>

      {lessons.map((lesson) => (
        <LessonCard key={lesson.lessonNumber} {...lesson} />
      ))}
    </div>
  );
};

export default ChapterCard;
