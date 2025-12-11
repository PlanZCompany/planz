"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GenericParagraph from "../Generic/GenericParagraph";

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
];

export default function Header() {
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
        className={`${!isLast && "border-r border-white/80 pr-2"}`}
      >
        <Link href={anchor.href} className={`text-white `}>
          <GenericParagraph
            fontStyle={
              isEn ? "font-clash font-normal" : "font-sansation font-normal"
            }
            textColor="text-white"
            pType="regular"
          >
            {isEn ? anchor.nameEN : anchor.nameBG}
          </GenericParagraph>
        </Link>
      </li>
    );
  });

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
      <nav
        className="content_wrapper w-full flex justify-between items-center px-2 md:px-4
       bg-black/80 border-b border-l border-r border-primaryGreen/80 py-3 rounded-bl-md rounded-br-md"
      >
        <ul className="flex items-center gap-2">{anchorsContent}</ul>
        <div className="bg-white flex justify-center items-center rounded-md px-2 py-1">
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
