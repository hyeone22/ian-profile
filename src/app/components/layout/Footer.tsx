import React from "react";

interface FooterLink {
  href: string;
  label: string;
}

function Footer() {
  const FooterItem: FooterLink[] = [
    { href: "https://wmfrjdnsakdma12.tistory.com/", label: "블로그" },
    {
      href: "https://www.linkedin.com/in/%EC%8A%B9%ED%98%84-%EA%B9%80-584b89277/",
      label: "LinkedIn",
    },
    { href: "https://github.com/hyeone22", label: "Github" },
    {
      href: "https://jagged-tang-bdd.notion.site/Web-Frontend-Developer-1b3da43512c980a38e9cf7e64ac7dd2c?pvs=74",
      label: "Profile",
    },
  ];

  return (
    <footer className="bg-text-dark pt-14 pb-8">
      <div className="max-w-[1200px] m-auto text-center px-8">
        <div className="flex justify-center gap-6 mb-6">
          {FooterItem.map(({ href, label }) => (
            <a key={href} target="_blank" className="text-white">
              {label}
            </a>
          ))}
        </div>
        <p className="opacity-60 text-white">
          © 2025 Ian. All rights reserved.
          <br />
          <small>기획자의 마인드를 탑재한 리더, 김승현</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
