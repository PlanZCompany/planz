// content/contact.ts

import { Locale } from "@/types";

export const CONTACT_SECTION_COPY = {
  eyebrow: {
    bg: "Контакт",
    en: "Contact",
  },
  heading: {
    bg: "Да поговорим",
    en: "Let’s talk",
  },
  description: {
    bg: "Споделете ни накратко какъв е вашият бизнес и какъв уебсайт или подобрение търсите, а ние ще се върнем с конкретни следващи стъпки, ориентировъчен бюджет и реалистичен срок за изпълнение.",
    en: "Tell us briefly about your business and what kind of website or improvement you’re looking for, and we’ll come back with clear next steps, an estimated budget and a realistic delivery timeline.",
  },
} as const;

export const getContactSectionCopy = (locale: Locale) => ({
  eyebrow: CONTACT_SECTION_COPY.eyebrow[locale],
  heading: CONTACT_SECTION_COPY.heading[locale],
  description: CONTACT_SECTION_COPY.description[locale],
});

export const CONTACT_SUCCESS_COPY = {
  title: {
    bg: "Благодарим за запитването!",
    en: "Thank you for your inquiry!",
  },
  message: {
    bg: "Получихме информацията ви и ще се свържем с вас в кратък срок, за да уточним детайлите и да предложим следващите стъпки.",
    en: "We’ve received your message and will get back to you shortly to clarify the details and suggest the next steps.",
  },
} as const;

export const getContactSuccessCopy = (locale: Locale) => ({
  title: CONTACT_SUCCESS_COPY.title[locale],
  message: CONTACT_SUCCESS_COPY.message[locale],
});
