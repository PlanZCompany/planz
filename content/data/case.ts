export const CASE_STUDIES = {
  heading: {
    bg: "Реални проекти, реални резултати",
    en: "Real projects, real results",
  },
  subheading: {
    bg: "Не всичко, което сме правили, а най-показателните примери за начина ни на работа и мислене.",
    en: "Not everything we’ve done, but the projects that best reflect how we work and think.",
  },
  extraText: {
    bg: "Подбрани проекти",
    en: "Selected projects",
  },
  projects: [
    {
      type: {
        bg: "Миграция",
        en: "Мigration",
      },
      title: {
        bg: "ЕЛГО онлайн магазин за ВИК части",
        en: "ELGO online store for VIK parts",
      },
      description: {
        bg: "Миграция от WordPress към напълно контрилиран сайт. Подобрена визия, функционалност и 90% увеличение на продажбите и популярността.",
        en: "Migration from WordPress to a fully controlled website. Improved vision, functionality and 50% increase in sales and popularity.",
      },
      features: {
        bg: ["Дизайн", "Имейли", "SEO", "Поръчки"],
        en: ["Design", "Emails", "SEO", "Orders"],
      },
      image: "/static/elgo.png",
      url: "https://elgo.bg",
    },
    {
      type: {
        bg: "Миграция",
        en: "Мigration",
      },
      title: {
        bg: "Интернет магазин",
        en: "E-commerce",
      },
      description: {
        bg: "Интернет магазин",
        en: "E-commerce",
      },
      features: {
        bg: ["Интернет магазин", "Интернет магазин", "Интернет магазин"],
        en: ["E-commerce", "E-commerce", "E-commerce"],
      },
      image: "/static/elgo.png",
      url: "https://elgo.bg",
    },
  ],
} as const;
