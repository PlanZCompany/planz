"use client";

import { useState } from "react";
import GenericHeading from "../Generic/GenericHeading";
import { Locale } from "@/types";
import GenericParagraph from "../Generic/GenericParagraph";

interface FaqItemProps {
  id?: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
  locale: Locale;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  defaultOpen = false,
  locale,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = id ? `faq-panel-${id}` : undefined;

  return (
    <div className="rounded-3xl overflow-hidden relative border-2 border-primaryDarkGreen gray-gradient_3 p-2 max-w-[1000px] mx-auto">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <GenericHeading
          headingType="h5"
          align="text-left"
          fontStyle={
            locale === "en"
              ? "font-clash font-bold"
              : "font-sansation font-bold"
          }
          textColor="text-primaryGreen"
        >
          {question}
        </GenericHeading>

        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primaryGreen bg-primaryDarkGreen transition-colors">
          <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            {/* horizontal line (минус) */}
            <path
              d="M5 12h14"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* вертикална линия (за плюс) – скриваме я, когато е отворено */}
            {!isOpen && (
              <path
                d="M12 5v14"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`
          overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <GenericParagraph
          textColor="text-white"
          pType="regular"
          fontStyle={
            locale === "en"
              ? "font-clash font-normal"
              : "font-sansation font-normal"
          }
          extraClass="pb-2"
        >
          {answer}
        </GenericParagraph>
      </div>
    </div>
  );
};
