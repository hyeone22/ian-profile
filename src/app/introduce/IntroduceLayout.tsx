import React from "react";

interface IntroduceProps {
  title: string;
  children: React.ReactNode;
}

function IntroduceLayout({ title, children }: IntroduceProps) {
  return (
    <section className="mb-10 scroll-mt-20">
      <h2 className="text-[1.8rem] mb-5 pb-[10px] text-[#2c3e50] border-b border-b-stone-200">
        {title}
      </h2>
      <div className="bg-white rounded-lg mb-[30px]">{children}</div>
    </section>
  );
}

export default IntroduceLayout;
