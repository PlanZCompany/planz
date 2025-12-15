import React from "react";
import ErrorMessageBox from "./GenericError";
import { Locale } from "@/types";

export type TextAriaProps<T> = {
  name: string;
  label: string;
  formValues: object;
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
  placeholder: string;
  error?: string;
  extraClass?: string;
  required?: boolean;
  locale: Locale;
};

const TextAria = <T,>({
  name,
  label,
  formValues,
  setFormValues,
  placeholder,
  error,
  extraClass,
  required = false,
  locale,
}: TextAriaProps<T>) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <label
        htmlFor={name}
        className={`${
          locale === "en" ? "font-clash font-bold" : "font-sansation font-bold"
        } text-primaryGreen`}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div
        className={`relative flex w-full items-start justify-between rounded-lg border border-gray-600 bg-transparent font-exo-2 font-normal text-white outline-none
             ${extraClass} ${
          locale === "en" ? "font-clash" : "font-sansation"
        }`}
      >
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          value={formValues[name as keyof object]}
          onChange={(e) => onChangeHandler(e)}
          className={`w-full bg-transparent p-3 pr-[46px] font-exo-2 font-normal text-white outline-none ${extraClass}`}
          rows={4}
          // cols={50}
        />
      </div>

      {!!error && <ErrorMessageBox error={error} />}
    </div>
  );
};

export default TextAria;
