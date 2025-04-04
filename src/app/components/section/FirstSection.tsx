import Link from "next/link";
import React from "react";

function FirstSection() {
  return (
    <article className="h-screen w-full flex flex-col justify-center items-center text-center text-white pt-20 bg-gradient-to-br from-custom-teal-light to-custom-teal-dark">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="block text-4xl md:text-6xl font-bold">
            기획자의 마인드를 탑재한 리더
          </h1>
          <p className="text-2xl md:text-4xl mb-8 opacity-90">
            기획부터 개발까지 고민하는 문제 해결사
          </p>
          <Link
            href="/introduce"
            className="bg-white py-4 px-10 underline text-primary-color text-xl cursor-pointer rounded-full transition transform ease-out"
          >
            더 알아보기
          </Link>
        </div>
      </div>
    </article>
  );
}

export default FirstSection;
