import React from "react";
import MainSection from "../layout/MainSection";

export interface Card {
  index: string;
  emoji: string;
  title: string;
  description: string;
}
export const SectionCard: Card[] = [
  {
    index: "01",
    emoji: "📱",
    title: "레몬사운드",
    description:
      "글로벌 음악 콘테스트, 맞춤형 음악 제작 요청,\n 음악 라이센스 서비스를 제공하는 플랫폼",
  },
  {
    index: "02",
    emoji: "📱",
    title: "와라지지(Wara-gg)",
    description:
      "누구나 쉽게 게임 대회를 개설하고 참여할 수 있는 e스포츠 플랫폼",
  },
  {
    index: "03",
    emoji: "📱",
    title: "쉐어스페이스",
    description:
      "좁은 주거 공간과 계절 용품 및 보관 문제 등\n 현대 사회에서 흔히 겪는 공간 부족 문제를 해결하기 위한 서비스",
  },
  {
    index: "04",
    emoji: "📱",
    title: "아테나 올리바",
    description:
      "올리브유 브랜드 소개를 위한 반응형 웹 페이지 개발 및\n 유저에게 노출되는 화면을 위한 관리자 페이지 개발",
  },
];

function ThirdSection() {
  return (
    <MainSection title="프로젝트 개요" bgColor="bg-light-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
    </MainSection>
  );
}

export default ThirdSection;
