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
        bg: "Цялостна миграция",
        en: "Full migration",
      },
      title: {
        bg: "'ЕЛГО' онлайн магазин за ВИК части",
        en: "'ELGO' online store for VIK parts",
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
        bg: "Цялостна миграция",
        en: "Full migration",
      },
      title: {
        bg: "'Обичайте се' онлайн магазин",
        en: "'Obichaite se' online store",
      },
      description: {
        bg: "Миграция от PHP към напълно контрилиран сайт с Next.js. Подобрена визия, функционалност и 80% увеличение на продажбите и популярността.",
        en: "Migration from PHP to a fully controlled website with Next.js. Improved vision, functionality and 80% increase in sales and popularity.",
      },
      features: {
        bg: [
          "Дизайн",
          "Имейли",
          "SEO",
          "Поръчки",
          "Аналитици",
          "Плащания",
          "Админ Панел",
        ],
        en: [
          "Design",
          "Emails",
          "SEO",
          "Orders",
          "Analytics",
          "Payments",
          "Admin Panel",
        ],
      },
      image: "/static/obichaite-se.png",
      url: "https://obichaite-se.com/",
    },
    {
      type: {
        bg: "Цялостна миграция",
        en: "Full migration",
      },
      title: {
        bg: "'Град на лъжите' онлайн магазин",
        en: "'Grad na lаjite' online store",
      },
      description: {
        bg: "Миграция от PHP към напълно контрилиран сайт с Next.js. Подобрена визия, функционалност и 100% увеличение на продажбите и популярността.",
        en: "Migration from PHP to a fully controlled website with Next.js. Improved vision, functionality and 100% increase in sales and popularity.",
      },
      features: {
        bg: [
          "Дизайн",
          "Имейли",
          "SEO",
          "Поръчки",
          "Аналитици",
          "Плащания",
          "Админ Панел",
          "Econt",
          "Speedy",
          "BoxNow",
        ],
        en: [
          "Design",
          "Emails",
          "SEO",
          "Orders",
          "Analytics",
          "Payments",
          "Admin Panel",
          "Econt",
          "Speedy",
          "BoxNow",
        ],
      },
      image: "/static/grad-na-lujite.png",
      url: "https://grad-na-lajite-dun.vercel.app/", //TODO change when it's done
    },
    {
      type: {
        bg: "Цялостен Проект",
        en: "Full project",
      },
      title: {
        bg: "'Eumainhillfarms' представителен website.",
        en: "'Eumainhillfarms' representative website.",
      },
      description: {
        bg: "Проект създаден по идея от нулата, отлични SEO резултати, конкуретна визия и функционалност.",
        en: "Project created from scratch, excellent SEO results, competitive vision and functionality.",
      },
      features: {
        bg: ["Дизайн", "Презентация", "SEO"],
        en: ["Design", "Presentation", "SEO"],
      },
      image: "/static/eumain.png",
      url: "https://eumainhillfarms.com/",
    },
  ],
} as const;
