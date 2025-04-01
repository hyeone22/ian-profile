import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

function MainSection({ title, children, bgColor }: SectionProps) {
  return (
    <article className={twMerge("bg-white h-screen py-24", `${bgColor}`)}>
      <div className="mx-auto max-w-[1200px] px-8">
        <h1 className="text-center text-5xl mb-12 text-text-dark">{title}</h1>
        {children}
      </div>
    </article>
  );
}

export default MainSection;
