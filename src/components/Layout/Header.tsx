"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GenericParagraph from "../Generic/GenericParagraph";
import { MenuIcon } from "@/assets/icons";
import { useState } from "react";

const anchors = [
  {
    nameEN: "Home",
    nameBG: "Начало",
    href: "#home",
  },
  {
    nameEN: "Services",
    nameBG: "Услуги",
    href: "#services",
  },
  {
    nameEN: "Process",
    nameBG: "Процес",
    href: "#process",
  },
  {
    nameEN: "Results",
    nameBG: "Резултати",
    href: "#results",
  },
  {
    nameEN: "Tech",
    nameBG: "Технологии",
    href: "#tech",
  },
  {
    nameEN: "FAQ",
    nameBG: "FAQ",
    href: "#faq",
  },
  {
    nameEN: "Contact",
    nameBG: "Контакти",
    href: "#contact",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isEn = pathname.startsWith("/en");
  const targetPath = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  const anchorsContent = anchors.map((anchor, index) => {
    const isLast = index === anchors.length - 1;
    return (
      <li
        key={anchor.href}
        className={`py-2 px-2 md:px-[unset] md:py-[unset] hover:opacity-80 ${
          !isLast && "md:border-r md:border-white/80 md:pr-2"
        }`}
      >
        <Link
          href={anchor.href}
          className={`text-white `}
          aria-label={isEn ? anchor.nameEN : anchor.nameBG}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <GenericParagraph
            fontStyle={
              isEn ? "font-clash font-normal" : "font-sansation font-normal"
            }
            textColor="text-white"
            pType="regular"
            extraClass="text-center md:text-left bg-gray-400/20 md:bg-transparent rounded-[100px] md:rounded-none py-2 md:py-[unset] px-4 md:px-[unset] border
            border-primaryDarkGreen/50 md:border-0"
          >
            {isEn ? anchor.nameEN : anchor.nameBG}
          </GenericParagraph>
        </Link>
      </li>
    );
  });

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
      <div
        className={`absolute left-0 right-0 top-full landscape:hidden portrait:block ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-150%] opacity-0"
        } transition-all duration-700 ease-in-out`}
      >
        <ul className="content_wrapper bg-[#020202] flex flex-col border-l border-r border-b border-primaryGreen/50">
          {anchorsContent}
        </ul>
      </div>
      <nav
        className="content_wrapper w-full flex justify-between items-center px-2 md:px-4
       bg-black/80 border-b border-l border-r border-primaryGreen/80 py-3 rounded-bl-md rounded-br-md"
      >
        <ul className="items-center gap-2 portrait:hidden landscape:flex">
          {anchorsContent}
        </ul>
        <button
          className="flex size-8 justify-center items-center portrait:block landscape:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon />
        </button>
        <div className="bg-white flex justify-center items-center rounded-md px-2 py-1 hover:opacity-80">
          <Link href={isEn ? targetPath : targetPath}>
            <p className={`${!isEn ? "font-clash" : "font-sansation"}`}>
              {isEn ? "БГ" : "EN"}
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
