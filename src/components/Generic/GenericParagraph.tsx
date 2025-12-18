import React from "react";

type paragraphProps = {
  children: React.ReactNode;
  extraClass?: string;
  pType?: "extraSmall" | "small" | "semi" | "regular" | "large" | "custom";
  fontStyle?:
    | "font-sansation font-normal"
    | "font-clash font-normal"
    | "font-clash font-bold"
    | "custom";
  textColor?:
    | "text-white"
    | "text-primaryYellow"
    | "text-black"
    | "text-primaryGreen";
};

const fontMap = {
  extraSmall: "text-xs",
  small: "text-[14px] md:text-[16px] leading-[150%] tracking-[0.01em]",
  semi: "text-[14px] md:text-[18px] leading-[150%] tracking-[0.01em]",
  regular: "text-[16px] md:text-[18px] leading-[150%] tracking-[0.01em]",
  large: "text-[18px] md:text-[20px] 2xl:text-[24px] leading-[150%] tracking-[0.01em]",
  custom: "custom",
};

const GenericParagraph = ({
  children,
  extraClass,
  pType = "regular",
  fontStyle = "font-sansation font-normal",
  textColor = "text-white",
}: paragraphProps) => {
  return (
    <div
      className={`${fontStyle !== "custom" && fontStyle} ${extraClass} ${
        pType !== "custom" && fontMap[pType]
      } ${textColor}`}
    >
      {children}
    </div>
  );
};

export default GenericParagraph;
