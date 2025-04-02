import React from "react";
import Header from "./Header";
import dynamic from "next/dynamic";

const IntroduceCard = dynamic(() => import("../components/card/IntroduceCard"));

function Introduce() {
  return (
    <div className="bg-#f8f9fa min-h-screen px-5 py-32">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <Header />
        <IntroduceCard />
      </div>
    </div>
  );
}

export default Introduce;
