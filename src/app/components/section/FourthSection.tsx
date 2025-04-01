import React from "react";
import MainSection from "../layout/MainSection";

function FourthSection() {
  return (
    <MainSection title="뭐가 들어가야 할까요?">
      <div className="flex flex-col items-center gap-4 max-w-[800px] mx-auto">
        <h3 className="text-[2rem] mb-6 text-primary-color">
          뭔가를 입력해 보세요
        </h3>
        <p className="text-[1.2rem] text-text-light">뭐라고 말 좀 해봐</p>
      </div>
    </MainSection>
  );
}

export default FourthSection;
