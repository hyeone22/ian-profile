import React from "react";
import MainSection from "../layout/MainSection";

interface Card {
  emoji: string;
  title: string;
  description: string;
}

function SecondSection() {
  const GridCard: Card[] = [
    {
      emoji: "🌱",
      title: "효율적인 작업",
      description:
        "데일리 스크럼과 주간 회고를 통해 우선순위를 설정하여 팀의 효율적인 작업을 이끌수 있는 사람",
    },
    {
      emoji: "🌱",
      title: "적극적인 태도",
      description:
        "일정 지연, 소통 부재 등 불확실한 상황에서도 적극적인 태도로 해결책을 강구하고 제안하는 사람",
    },
    {
      emoji: "🌱",
      title: "적극적으로 참여할 수 있는 환경",
      description:
        "개인의 성향을 고려한 소통 방식을 확립하고 적극적으로 참여할 수 있는 환경을 만드는 사람",
    },
    {
      emoji: "🌱",
      title: "명확한 작업 지시",
      description:
        "주간 회의 내용을 문서화하는 동시에 요청과 피드백을 신솧가게 명확한 작업 지시를 하는 사람",
    },
    {
      emoji: "🌱",
      title: "오너십 마인드의 구성원",
      description:
        "팀의 성과를 위해 필요한 일이 있다면 직무의 경계를 넘어서라도 기꺼이 행동하는 사람",
    },
    {
      emoji: "🌱",
      title: "효과적인 관리",
      description:
        "저만의 스트레스 관리 루틴으로 스트레스를 효과적으로 관리할 수 있는 사람",
    },
  ];

  return (
    <MainSection title="뭐가 들어가야 할까요?">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {GridCard.map(({ emoji, title, description }) => (
          <div
            key={title}
            className="p-8 text-center bg-light-gray rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <span className="text-[40px] mb-2 block">{emoji}</span>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm">{description} </p>
          </div>
        ))}
      </div>
    </MainSection>
  );
}

export default SecondSection;
