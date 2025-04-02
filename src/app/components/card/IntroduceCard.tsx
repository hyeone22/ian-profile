"use client";

import React, { useState } from "react";
import IntroIndex from "@/app/introduce/IntroIndex";
import dynamic from "next/dynamic";

const Skill = dynamic(() => import("../common/list/Skill"));
const Work = dynamic(() => import("../common/list/Work"));
const Activity = dynamic(() => import("../common/list/Activity"));
const Education = dynamic(() => import("../common/list/Education"));
const School = dynamic(() => import("../common/list/School"));
const Contact = dynamic(() => import("../common/list/Contact"));
const Intro = dynamic(() => import("../common/list/Intro"));

interface List {
  name: string;
  content: React.ReactNode;
}
export const Index: List[] = [
  { name: "Introduce", content: <Intro /> },
  { name: "Skill", content: <Skill /> },
  { name: "Work", content: <Work /> },
  { name: "Activity", content: <Activity /> },
  { name: "Education", content: <Education /> },
  { name: "School", content: <School /> },
  { name: "Contact", content: <Contact /> },
];

function IntroduceCard() {
  const [isSelect, setIsSelect] = useState<string>("Introduce");

  return (
    <div>
      <div className="flex gap-10 p-10">
        {/* 목차 */}
        <div className="flex-[0_0_250px] sticky top-5 self-start">
          <IntroIndex setIsSelect={setIsSelect} />
        </div>
        {/* 내용 */}
        <div className="flex-1">
          {Index.map(
            (item) =>
              isSelect === item.name && (
                <React.Fragment key={item.name}>{item.content}</React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroduceCard;
