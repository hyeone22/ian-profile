import Link from "next/link";
import React from "react";

function FirstSection() {
  return (
    <article className="h-screen w-full flex flex-col justify-center items-center text-center text-white pt-20 bg-gradient-to-br from-custom-teal-light to-custom-teal-dark">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold leading-5 mb-6">
          아무 말이나 넣어주세요
        </h1>
        <p className="text-4xl mb-8 opacity-90">아무 말이나 넣어주세요 제발</p>
        <Link
          href="/"
          className="bg-white py-4 px-10 underline text-primary-color text-xl cursor-pointer rounded-full transition transform ease-out"
        >
          지금 시작하기
        </Link>
      </div>
    </article>
  );
}

export default FirstSection;
