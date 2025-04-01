import React from "react";

function FourthSection() {
  return (
    <article className="bg-white h-screen py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <h1 className="text-center text-5xl mb-12 text-text-dark">
          뭐가 들어가야할까요?
        </h1>
        <div className="flex flex-col items-center gap-4 max-w-[800px] mx-auto">
          <h3 className="text-[2rem] mb-6 text-primary-color">
            뭔가를 입력해 보세요
          </h3>
          <p className="text-[1.2rem] text-text-light">뭐라고 말 좀 해봐</p>
        </div>
      </div>
    </article>
  );
}

export default FourthSection;
