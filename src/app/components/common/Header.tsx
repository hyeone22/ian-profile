import React from "react";

interface HeaderProps {
  title: string;
  desc: string;
}

function Header({ title, desc }: HeaderProps) {
  return (
    <header className="text-center py-10 px-5 text-white bg-gradient-to-br from-[#a8e6cf] via-[#81c3b0] to-[#81c3b0]">
      <h1 className="text-[2.5rem] mb-[10px] font-bold">{title}</h1>
      <p className=" opacity-90 text-base">{desc}</p>
    </header>
  );
}

export default Header;
