import { Locale } from "@/types";

export const HERO = {
  title: {
    bg: "От идея до реализация – дигитални решения, които работят за вашия бизнес.",
    en: "From idea to execution – digital solutions that work for your business.",
  },
  button: {
    bg: "Контакти",
    en: "Contact",
  },
};

export const getHero = (locale: Locale) => {
  return {
    title: HERO.title[locale],
    button: HERO.button[locale],
  };
};

export type HeroServiceSlideId =
  | "new-website"
  | "redesign"
  | "seo"
  | "integrations"
  | "migration";

export interface HeroServiceSlide {
  id: HeroServiceSlideId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const HERO_SERVICE_SLIDES: HeroServiceSlide[] = [
  {
    id: "new-website",
    title: {
      bg: "Нов уебсайт от нулата",
      en: "New website from scratch",
    },
    description: {
      bg: "Помагаме ви да превърнете идеята си в ясен, бърз и подреден уебсайт, който говори на езика на вашите клиенти.",
      en: "We turn your idea into a clear, fast and well-structured website that speaks your customers’ language.",
    },
  },
  {
    id: "redesign",
    title: {
      bg: "Редизайн на съществуващ сайт",
      en: "Website redesign & rebranding",
    },
    description: {
      bg: "Обновяваме изгледа и структурата на сайта ви, за да изглежда модерно и да работи по-добре за вашия бизнес.",
      en: "We refresh your existing website so it looks modern, feels consistent with your brand, and works better for your business.",
    },
  },
  {
    id: "seo",
    title: {
      bg: "SEO и техническа настройка",
      en: "SEO setup & technical SEO",
    },
    description: {
      bg: "Подготвяме сайта ви за търсачките – от структура и мета данни до скорост и технически детайли.",
      en: "We prepare your website for search engines – from structure and metadata to speed and key technical details.",
    },
  },
  {
    id: "integrations",
    title: {
      bg: "Интеграции с ваши инструменти",
      en: "Integrations with your tools",
    },
    description: {
      bg: "Свързваме сайта ви с CRM, форми, имейл системи и плащания, за да работи всичко заедно без излишно усилие.",
      en: "We connect your website with CRM systems, forms, email platforms and payments so everything works smoothly together.",
    },
  },
  {
    id: "migration",
    title: {
      bg: "Миграция към модерна платформа",
      en: "Migration to a modern stack",
    },
    description: {
      bg: "Преместваме стария ви сайт към съвременен стек (напр. Next.js), без да губите съдържание и с голяма печалба в скоростта.",
      en: "We move your existing website to a modern stack (like Next.js), keeping your content and boosting performance.",
    },
  },
];

export type HeroService = {
  id: HeroServiceSlideId;
  title: string;
  description: string;
};

export const getHeroServices = (locale: Locale): HeroService[] => {
  return HERO_SERVICE_SLIDES.map((slide) => ({
    id: slide.id,
    title: slide.title[locale],
    description: slide.description[locale],
  }));
};
