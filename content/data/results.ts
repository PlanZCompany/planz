import { Locale } from "@/types";

export const RESULTS_SECTION_COPY = {
  heading: {
    bg: "Доказателство за качеството зад дизайна",
    en: "Proof of quality behind the design",
  },
  subheading: {
    bg: "Резултати",
    en: "Results",
  },
  description: {
    bg: "За нас красивият сайт е само половината работа. Завършваме проектите си с измерими резултати – отлично техническо състояние, скорост и SEO показатели, потвърдени от инструменти като PageSpeed Insights и Ahrefs.",
    en: "A beautiful website is only half the job. We finish our projects with measurable results — excellent technical health, speed and SEO performance, verified by tools like PageSpeed Insights and Ahrefs.",
  },
  images: [
    { src: "/static/ahrefs.png", alt: "Ahrefs" },
    {
      src: "/static/pagespeed.png",
      alt: "PageSpeed Insights",
    },
  ],
} as const;

export const getResultsCopy = (locale: Locale) => ({
  heading:
    RESULTS_SECTION_COPY.heading[
      locale as keyof typeof RESULTS_SECTION_COPY.heading
    ],
  subheading:
    RESULTS_SECTION_COPY.subheading[
      locale as keyof typeof RESULTS_SECTION_COPY.subheading
    ],
  description:
    RESULTS_SECTION_COPY.description[
      locale as keyof typeof RESULTS_SECTION_COPY.description
    ],
  images: RESULTS_SECTION_COPY.images,
});
