import React from "react";
import Header from "../components/common/Header";
import ProjectCard from "../components/card/ProjectCard";

function Project() {
  return (
    <div className="bg-#f8f9fa min-h-screen px-3 md:px-5 py-32">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <Header title="프로젝트" desc="프로젝트를 소개합니다!" />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;
