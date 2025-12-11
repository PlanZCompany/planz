// content/process.ts

import { Locale } from "@/types";

export type ProcessStepId =
  | "discovery"
  | "proposal"
  | "design-dev"
  | "testing-launch"
  | "support"
  | "feedback-improvements";

export interface ProcessStep {
  id: ProcessStepId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
}

export const PROCESS_SECTION_COPY = {
  heading: {
    bg: "Как работим",
    en: "How we work",
  },
  subheading: {
    bg: "Ясен процес от първия разговор до готовия уебсайт.",
    en: "A clear process from the first call to your live website.",
  },
  extraText: {
    bg: "5 ясни стъпки",
    en: "5 simple steps",
  },
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    title: {
      bg: "Откриване и първи разговор",
      en: "Discovery & first call",
    },
    description: {
      bg: "Започваме с кратък онлайн разговор, за да разберем бизнеса ви, целите и какво очаквате от сайта.",
      en: "We start with a short online call to understand your business, goals and what you expect from your website.",
    },
    image: "/static/discovery.png",
  },
  {
    id: "proposal",
    title: {
      bg: "Предложение и обхват на проекта",
      en: "Proposal & project scope",
    },
    description: {
      bg: "Изготвяме ясно предложение с обхват, стъпки, срокове и ориентировъчен бюджет, за да знаете точно какво получавате.",
      en: "We prepare a clear proposal with scope, steps, timeline and an estimated budget so you know exactly what you’re getting.",
    },
    image: "/static/discovery.png",
  },
  {
    id: "design-dev",
    title: {
      bg: "Дизайн и разработка",
      en: "Design & development",
    },
    description: {
      bg: "Създаваме структура, дизайн и функционалности, съобразени с вашия бранд и нуждите на клиентите ви.",
      en: "We design the structure, visuals and features around your brand and your customers’ needs.",
    },
    image: "/static/discovery.png",
  },
  {
    id: "feedback-improvements",
    title: {
      bg: "Обратна връзка и подобрения",
      en: "Feedback & improvements",
    },
    description: {
      bg: "Събираме обратна връзка от вас, за да изгладим детайлите и да подобрим ключовите екрани.",
      en: "We gather feedback from you to polish the details and improve the key screens.",
    },
    image: "/static/discovery.png",
  },
  {
    id: "testing-launch",
    title: {
      bg: "Тестове и пускане на сайта",
      en: "Testing & launch",
    },
    description: {
      bg: "Проверяваме скорост, мобилна версия и основни сценарии, коригираме детайлите и пускаме сайта на живо.",
      en: "We test speed, mobile experience and key user flows, refine the details and launch your site live.",
    },
    image: "/static/discovery.png",
  },
  {
    id: "support",
    title: {
      bg: "Поддръжка и бъдещо развитие",
      en: "Support & future improvements",
    },
    description: {
      bg: "При нужда оставаме до вас за малки промени, подобрения и нови функционалности, когато бизнесът ви е готов за следваща стъпка.",
      en: "When needed, we stay by your side for small changes, improvements and new features as your business grows.",
    },
    image: "/static/discovery.png",
  },
];
