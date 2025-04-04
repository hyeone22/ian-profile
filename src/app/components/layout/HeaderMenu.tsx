import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface HeaderMenuProps {
  setIsOpen: (isOpen: boolean) => void;
  handleTop: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
  isOpen: boolean;
}
interface MenuType {
  path: string;
  label: string;
}

function HeaderMenu({ setIsOpen, handleTop, isOpen }: HeaderMenuProps) {
  const menuItems: MenuType[] = [
    { path: "/", label: "홈" },
    { path: "/introduce", label: "소개" },
    { path: "/project", label: "프로젝트" },
    { path: "/pickup", label: "가치관" },
    { path: "/contact", label: "문의하기" },
  ];

  return (
    <div
      className={twMerge(
        `absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out transform`,
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none",
        "md:relative md:transform-none md:opacity-100 md:pointer-events-auto md:shadow-none md:flex md:justify-end"
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 py-4">
        {menuItems.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            passHref
            onClick={(e) => {
              handleTop(e, path);
              setIsOpen(false);
            }}
            className="py-2 px-4 font-medium hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeaderMenu;
