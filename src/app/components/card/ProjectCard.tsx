import React from "react";
import { SectionCard } from "../section/ThirdSection";

function ProjectCard() {
  return (
    <div className="gap-10 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-0 md:mt-8">
        {SectionCard.map(({ index, emoji, title, description }, idx) => (
          <div
            key={index}
            className="text-center bg-white rounded-[20px] relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="text-[40px] mt-4 font-bold text-primary-color rounded-[20px] bg-[rgba(0,191,179,0.1)] w-fit px-4 py-2  mx-auto mb-4">
              {index}
            </div>
            <div
              className="mx-0 mt-6 block text-[4rem] animate-float"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              {emoji}
            </div>
            <h3 className="text-[1.5rem] font-semibold text-text-dark mb-4">
              {title}
            </h3>
            <p className="text-text-light leading-6 text-xs md:text-[1.1rem] pb-4 whitespace-pre-line">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
