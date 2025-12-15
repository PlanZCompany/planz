import { Locale } from "@/types";

export const FAQ_SECTION_COPY = {
  eyebrow: {
    bg: "Въпроси",
    en: "Questions",
  },
  heading: {
    bg: "Отговори на най-важните въпроси преди да започнем работа.",
    en: "Answers to the key questions before we start working together.",
  },
  description: {
    bg: "Събрахме на едно място най-честите неща, които клиентите ни питат – за срокове, бюджети, процес и поддръжка – за да имате ясна картина още в началото.",
    en: "We’ve gathered in one place the most common questions about timelines, budgets, process and support so you can have a clear picture before we even start.",
  },
} as const;

export const getFaqSectionCopy = (locale: Locale) => ({
  eyebrow: FAQ_SECTION_COPY.eyebrow[locale],
  heading: FAQ_SECTION_COPY.heading[locale],
  description: FAQ_SECTION_COPY.description[locale],
});

export interface FaqItem {
  id: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "timeline",
    question: {
      bg: "Колко време отнема изработката на уебсайт?",
      en: "How long does it take to build a website?",
    },
    answer: {
      bg: "При по-малки сайтове и landing страници обикновено са нужни между 3 и 6 седмици – времето зависи основно от сложността, броя страници и това колко бързо се уточняват съдържанието и обратната връзка от ваша страна.",
      en: "For smaller websites and landing pages, it usually takes between 3 and 6 weeks — the timeline depends mainly on complexity, number of pages and how quickly we can finalize content and feedback together.",
    },
  },
  {
    id: "pricing",
    question: {
      bg: "Как определяте цената и бюджета?",
      en: "How do you define the price and budget?",
    },
    answer: {
      bg: "Цената се формира според обхвата – брой страници, дизайн изисквания, нужни интеграции и допълнителни функционалности, като винаги даваме ориентировъчен диапазон още след първия разговор и финална оферта след уточняване на детайлите.",
      en: "Our pricing is based on scope — number of pages, design requirements, needed integrations and extra functionality — and we always provide an estimated range after the first call and a final quote once we clarify all details.",
    },
  },
  {
    id: "existing-sites",
    question: {
      bg: "Работите ли с вече съществуващи сайтове?",
      en: "Do you work with existing websites?",
    },
    answer: {
      bg: "Да, често започваме от вече съществуващ сайт – можем да направим редизайн, техническа оптимизация, SEO подобрения или миграция към по-модерна платформа, без да губите важно съдържание.",
      en: "Yes, we often start from an existing website — we can redesign it, improve its technical performance and SEO, or migrate it to a more modern platform without losing important content.",
    },
  },
  {
    id: "content",
    question: {
      bg: "Трябва ли аз да подготвя текста и снимките?",
      en: "Do I need to prepare the texts and images?",
    },
    answer: {
      bg: "Най-добре е основните текстове и снимки да идват от вас, защото вие познавате бизнеса си най-добре, а ние помагаме с структура, редакция и препоръки за по-ясно и разбираемо съдържание.",
      en: "It’s best if the core texts and images come from you, because you know your business best, and we help with structure, editing and recommendations to make everything clearer and easier to understand.",
    },
  },
  {
    id: "support",
    question: {
      bg: "Предлагате ли поддръжка след пускане на сайта?",
      en: "Do you offer support after the website goes live?",
    },
    answer: {
      bg: "Да, при нужда можем да поемем текуща поддръжка – дребни промени, обновяване на съдържание, технически проверки и малки подобрения, или да работим по отделни задачи, когато ви е удобно.",
      en: "Yes, if needed we can provide ongoing support — small updates, content changes, technical checks and minor improvements — or work with you on a task-by-task basis whenever it’s convenient.",
    },
  },
  {
    id: "abroad-clients",
    question: {
      bg: "Работите ли с клиенти извън България?",
      en: "Do you work with clients outside Bulgaria?",
    },
    answer: {
      bg: "Да, можем да работим изцяло дистанционно – комуникацията се случва онлайн (email, чат, видео разговори), а процесът и изискванията са същите като при локални клиенти.",
      en: "Yes, we can work fully remotely — communication happens online (email, chat, video calls) and the process and expectations are the same as with local clients.",
    },
  },
  {
    id: "requirements",
    question: {
      bg: "Какво ви е нужно, за да започнем?",
      en: "What do you need from me to get started?",
    },
    answer: {
      bg: "Нужни са ни кратко описание на бизнеса ви, основните цели на сайта, примерни референции какво харесвате и ориентировъчен бюджет, за да предложим реалистичен обхват и първи стъпки.",
      en: "We need a short description of your business, the main goals of the website, a few references of what you like and an approximate budget so we can propose a realistic scope and first steps.",
    },
  },
  {
    id: "scalability",
    question: {
      bg: "Мога ли да надграждам сайта по-късно?",
      en: "Can we extend the website later?",
    },
    answer: {
      bg: "Да, планираме проектите така, че да могат да се развиват – да добавяме нови страници, езици и функционалности, без да пренаписваме всичко от нулата.",
      en: "Yes, we plan projects so they can grow over time — adding new pages, languages and features without having to rewrite everything from scratch.",
    },
  },
];
