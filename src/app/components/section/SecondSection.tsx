import React from "react";
import MainSection from "../layout/MainSection";

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
    <MainSection title="뭐가 들어가야 할까요?">
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
    </MainSection>
  );
}

export default SecondSection;
