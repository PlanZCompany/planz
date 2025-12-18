"use client";

import React from "react";

const constantClass = `inline-flex items-center justify-center 
whitespace-nowrap rounded ring-offset-background transition-colors focus-visible:outline-none 
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none`;
const classMap = {
  primary: `bg-gradient-to-br from-primaryGreen to-primaryDarkGreen text-primaryDarkBlue
         text-xl font-bold cursor-pointer border border-primaryDarkBlue
         transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-primaryDarkGreen hover:to-primaryGreen hover:text-primaryDarkBlue hover:border-primaryDarkBlue`,
  secondary:
    "border-[1px] border-white text-white text-xl font-bold cursor-pointer bg-primaryGreen/20 hover:bg-primaryGreen/30 transition-all duration-300 ease-in-out",
};

type GenericButtonProps = {
  styleClass?: string;
  disabled?: boolean;
  children: React.ReactNode;
  click?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string | null | undefined;
  variant?: "primary" | "secondary";
  form?: string;
};

const GenericButton = ({
  styleClass = "",
  disabled,
  children,
  click = () => {},
  type = "button",
  ariaLabel,
  variant = "primary",
  form = undefined,
}: GenericButtonProps) => {
  const variantClass = classMap[variant];

  return (
    <button
      className={`px-6 py-2 md:px-7 md:py-4 rounded-lg ${variantClass} ${constantClass} ${
        styleClass && styleClass
      } 
      font-sansation font-700 uppercase`}
      disabled={disabled}
      onClick={() => {
        click();
      }}
      type={type}
      aria-label={ariaLabel || "button"}
      form={form}
    >
      {children}
    </button>
  );
};

export default GenericButton;
