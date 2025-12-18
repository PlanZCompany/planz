"use client";

import { ScrollDownIcon } from "@/assets/icons";
import { useLayoutEffect, useState } from "react";

const ScrollDown = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
      setShowScrollDown(false);
    } else {
      setShowScrollDown(true);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute left-[50%] translate-x-[-50%] bottom-2 size-10 flex justify-center items-center ${
        showScrollDown
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="absolute size-12 z-[-1] border border-white/80 bg-gray-300/20 rounded-full circle_expand"></div>
      <ScrollDownIcon />
    </div>
  );
};

export default ScrollDown;
