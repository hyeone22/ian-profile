import React from "react";

interface Card {
  index: string;
  emoji: string;
  title: string;
  description: string;
}

function ThirdSection() {
  const Sectioncard: Card[] = [
    {
      index: "01",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
    {
      index: "02",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
    {
      index: "03",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
    {
      index: "04",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
    {
      index: "05",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
    {
      index: "06",
      emoji: "📱",
      title: "안녕하세요",
      description: "몰라요 이게 뭔지",
    },
  ];
  return (
    <article className="bg-light-gray h-screen py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <h1 className="text-center text-5xl mb-12 text-text-dark">
          아이돈노댓
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-8">
          {Sectioncard.map(({ index, emoji, title, description }, idx) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-[20px] relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out"
            >
              <div className="text-[40px] font-bold text-primary-color rounded-[20px] bg-[rgba(0,191,179,0.1)] w-fit px-4 py-2  mx-auto mb-4">
                {index}
              </div>
              <div
                className="mx-0 my-6 block text-[4rem] animate-float"
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                {emoji}
              </div>
              <h3 className="text-[1.5rem] text-text-dark mb-4">{title}</h3>
              <p className="text-text-light leading-6 text-[1.1rem]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ThirdSection;
