"use client";

import { useRef, useState } from "react";

import GenericButton from "@/components/Generic/GenericButton";
import ReCAPTCHA from "react-google-recaptcha";

import { Locale } from "@/types";
import { botValidate } from "@/app/actions/botValidation";
import {
  getContactSectionCopy,
  getContactSuccessCopy,
} from "../../../content/data/contact";
import GenericHeading from "../Generic/GenericHeading";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericTextInput from "../Generic/GenericTextInput";
import TextAria from "../Generic/GenericTextArea";
import { submitContactForm } from "@/app/actions/mail";
import ErrorMessageBox from "../Generic/GenericError";
import Badge from "../Custom/Badge";

export const ContactForm = ({ locale }: { locale: Locale }) => {
  const results = getContactSectionCopy(locale);
  const { description, heading, eyebrow } = results;
  const successCopy = getContactSuccessCopy(locale);
  //ReCaptcha
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef(null);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
    budget: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<
    { message: string; status?: string } | undefined
  >();

  const handleSubmit = async () => {
    setError(undefined);

    const nameError =
      formValues.name.length < 3 ? "Името трябва да е поне 3 символа" : "";
    const emailError =
      !formValues.email ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email);
    const messageError = formValues.message.length < 10 ? true : false;

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError
          ? locale === "en"
            ? "Name must be at least 3 characters"
            : "Името трябва да е поне 3 символа"
          : "",
        email: emailError
          ? locale === "en"
            ? "Enter a valid email"
            : "Въведете валиден имейл"
          : "",
        message: messageError
          ? locale === "en"
            ? "Message must be at least 10 characters"
            : "Съобщението трябва да е поне 10 символа"
          : "",
      });

      return;
    }

    if (!captchaValue) {
      setError({
        message: "Моля поставете отметката `Не съм робот`.",
        status: "400",
      });
      return;
    }

    if (!termsAccepted) {
      setError({
        message: "Моля съгласете с условията на политиката за поверителност.",
        status: "400",
      });
      return;
    }

    try {
      const validUser = await botValidate(captchaValue as string);

      if (validUser.data === "error") {
        setError({
          message: "Моля поставете отметката `Не съм робот`.",
          status: "400",
        });
        return;
      }
    } catch (error) {
      console.error(error);
      setError({
        message: "Възникна грешка. Моля опитайте по-късно.",
        status: "400",
      });
      return;
    }

    try {
      const res = await submitContactForm({ payload: formValues }, locale);

      if (res.ok) {
        setFormValues({
          name: "",
          email: "",
          business: "",
          phone: "",
          message: "",
          budget: "",
          website: "",
        });
        setErrors({ name: "", email: "", message: "" });
        setError(undefined);
        setHasSubmitted(true);
      } else {
        setError({
          message: "Възникна грешка. Моля опитайте по-късно.",
          status: "400",
        });
      }
    } catch (err) {
      console.warn(err);
      setError({
        message: "Нещо се обърка. Моля опитайте по-късно.",
      });
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaValue(token);
  };

  return (
    <div className={`content_wrapper w-full pt-10 md:py-20 pb-10`} id="contact">
      <div className="w-full flex">
        <div className="w-full landscape:flex portrait:hidden">
          <div className="mt-auto h-0.5 bg-white w-full"></div>
        </div>
        <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
          <div className="w-full justify-center md:justify-end flex mb-3 md:mb-[unset]">
            <Badge heading={eyebrow} />
          </div>

          <div className="w-full md:w-fit">
            <GenericHeading
              headingType="h2"
              extraClass="text-center! md:text-right! mb-3 md:mb-[unset]"
            >
              {heading}
            </GenericHeading>
            <GenericParagraph
              pType="large"
              extraClass="text-center md:text-right"
              fontStyle={
                locale === "en"
                  ? "font-clash font-normal"
                  : "font-sansation font-normal"
              }
            >
              {description}
            </GenericParagraph>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-10 w-full flex flex-col gap-4 max-w-[1000px] mx-auto rounded-3xl overflow-hidden relative border-2 border-primaryDarkGreen gray-gradient_3 p-2">
        <div className="w-full p-4 md:p-6 flex flex-col gap-6">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <GenericTextInput
              name="name"
              label={`${locale === "en" ? "Name" : "Име"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={locale === "en" ? "Name" : "Име"}
              error={errors.name}
              required
              locale={locale}
            />
            <GenericTextInput
              name="email"
              label={`${locale === "en" ? "Email" : "Имейл"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={locale === "en" ? "Email" : "Имейл"}
              error={errors.email}
              required
              locale={locale}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <GenericTextInput
              name="business"
              label={`${locale === "en" ? "Business" : "Бизнес"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={`${locale === "en" ? "Business" : "Бизнес"}`}
              locale={locale}
            />
            <GenericTextInput
              name="phone"
              label={`${locale === "en" ? "Phone" : "Телефон"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={locale === "en" ? "Your Phone" : "Вашият Телефон"}
              locale={locale}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <GenericTextInput
              name="website"
              label={`${locale === "en" ? "Website" : "Website"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={locale === "en" ? "Current Website" : "Текущ сайт"}
              locale={locale}
            />
            <GenericTextInput
              name="budget"
              label={`${locale === "en" ? "Budget" : "Бюджет"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={
                locale === "en" ? "Sample Budget" : "Примерен Бюджет"
              }
              locale={locale}
            />
          </div>
          <div className="w-full">
            <TextAria
              name="message"
              label={`${locale === "en" ? "Message" : "Съобщение"}`}
              formValues={formValues}
              setFormValues={setFormValues}
              placeholder={
                locale === "en" ? "Your Message" : "Вашето Съобщение"
              }
              locale={locale}
              required
              error={errors.message}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={`w-5 min-w-5 aspect-square border border-primaryDarkGreen rounded-md flex justify-center items-center  
            bg-transparent`}
              onClick={() => {
                setTermsAccepted((prev) => !prev);
              }}
            >
              {termsAccepted && (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9336 1.01416C13.1797 1.2876 13.1797 1.69775 12.9336 1.94385L5.71484 9.1626C5.44141 9.43604 5.03125 9.43604 4.78516 9.1626L1.06641 5.44385C0.792969 5.19775 0.792969 4.7876 1.06641 4.5415C1.3125 4.26807 1.72266 4.26807 1.96875 4.5415L5.22266 7.79541L12.0039 1.01416C12.25 0.768066 12.6602 0.768066 12.9062 1.01416H12.9336Z"
                    fill={`white`}
                  />
                </svg>
              )}
            </button>

            <p className="text-[10px] md:text-[14px] font-montserrat-regular text-primaryWhite">
              <span
                className={`text-[10px] md:text-[14px] text-white ${
                  locale === "en"
                    ? "font-clash-regular"
                    : "font-sansation-regular"
                }`}
              >
                {locale === "en"
                  ? "I accept the terms and conditions"
                  : "Съгласен съм с условията"}
              </span>
            </p>
          </div>
          <div className="w-full mt-6 flex justify-center items-center md:justify-start">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY || ""}
              onChange={handleCaptchaChange}
              size="normal"
              theme="dark"
              hl="bg"
            />
          </div>
          <div className="w-full mt-2 flex justify-center items-center md:justify-start">
            <GenericButton
              type="button"
              variant="primary"
              click={() => handleSubmit()}
              //   disabled={!isCaptchaVerified}
            >
              {locale === "en" ? "Send Message" : "Изпрати Съобщение"}
            </GenericButton>
          </div>

          {error?.message && <ErrorMessageBox error={error.message} />}

          {hasSubmitted && (
            <div className="w-full">
              <p className="text-base text-emerald-600">
                <strong>{successCopy.title}</strong> {successCopy.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
