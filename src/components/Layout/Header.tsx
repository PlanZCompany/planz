"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isEn = pathname.startsWith("/en");
  const targetPath = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <header className="h-10 w-full fixed top-0 left-0 right-0 z-5 bg-white">
      <nav>
        <Link href={isEn ? targetPath : targetPath}>{isEn ? "BG" : "EN"}</Link>
      </nav>
    </header>
  );
}
