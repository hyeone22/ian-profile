import FirstSection from "./components/section/FirstSection";
import FourthSection from "./components/section/FourthSection";
import SecondSection from "./components/section/SecondSection";
import ThirdSection from "./components/section/ThirdSection";

export default function Home() {
  return (
    <section>
      {/* 자기소개 */}
      <FirstSection />
      {/* 내가 강조하고 싶은 내용 */}
      <SecondSection />
      {/* 프로젝트 개요 */}
      <ThirdSection />
      {/* 앞으로의 포부 내가 무엇에 관심이 있어 하는지 */}
      <FourthSection />
    </section>
  );
}
// 기술 스택, Contact, Skill 관련 내용,

// 소개 페이지 - skill 관련 내용 개인정보(학습, 학교, 대회활동)
// 프로젝트/경험 - 내 프로젝트
