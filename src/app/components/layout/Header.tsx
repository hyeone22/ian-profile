"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 주소에 대한 설정
  const handleTop = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsOpen(false);
    if (window.location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="py-4 w-full fixed top-0 left-0 bg-white shadow-custom z-10">
      <nav className="flex items-center justify-between m-auto px-6 max-w-[1200px]">
        {/* 로고 */}
        <div>
          <Link
            href="/"
            className="text-primary-color flex items-center gap-1.5 text-2xl font-bold no-underline transition-colors duration-300 ease-in-out"
            onClick={(e) => handleTop(e, "/")}
          >
            Ian
          </Link>
        </div>
        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-primary-color" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-primary-color" />
          )}
        </button>

        {/* 홈 메뉴 */}
        <HeaderMenu
          setIsOpen={setIsOpen}
          handleTop={handleTop}
          isOpen={isOpen}
        />
      </nav>
    </header>
  );
}

export default Header;
