import React from "react";

interface Card {
  emoji: string;
  title: string;
  description: string;
}

function SecondSection() {
  const GridCard: Card[] = [
    { emoji: "🌱", title: "어떤 내용", description: "모르겠어요" },
    { emoji: "🌱", title: "어떤 내용1", description: "모르겠어요" },
    { emoji: "🌱", title: "어떤 내용2", description: "모르겠어요" },
    { emoji: "🌱", title: "어떤 내용3", description: "모르겠어요" },
    { emoji: "🌱", title: "어떤 내용4", description: "모르겠어요" },
    { emoji: "🌱", title: "어떤 내용5", description: "모르겠어요" },
  ];

  return (
    <article className="bg-white h-screen py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <h1 className="text-center text-5xl mb-12 text-text-dark">
          뭐가 들어가야할까요?
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {GridCard.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="p-8 text-center bg-light-gray rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <span className="text-[40px] mb-4 block">{emoji}</span>
              <h3>{title}</h3>
              <p>{description} </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SecondSection;
