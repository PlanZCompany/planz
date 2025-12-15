// content/tech.ts

import { Locale } from "@/types";

export const TECH_SECTION_COPY = {
  eyebrow: {
    bg: "Технологии",
    en: "Technology",
  },
  heading: {
    bg: "Модерен технологичен сет, съобразен с вашия бизнес.",
    en: "A modern tech stack tailored to your business.",
  },
  description: {
    bg: "Комбинираме съвременни инструменти като Next.js, React и надеждни платформи за плащания и анализи, за да получите бърз, сигурен и устойчив уебсайт, който може спокойно да расте заедно с вашия бизнес.",
    en: "We combine modern tools like Next.js and React with reliable payment and analytics platforms so you get a fast, secure and future-proof website that can grow calmly alongside your business.",
  },
} as const;

export const getTechSectionCopy = (locale: Locale) => ({
  eyebrow: TECH_SECTION_COPY.eyebrow[locale],
  heading: TECH_SECTION_COPY.heading[locale],
  description: TECH_SECTION_COPY.description[locale],
});

export interface TechFeatureImage {
  id: string;
  label: string;
  image: {
    src: string;
    alt: string;
  };
}

export const TECH_FEATURE_IMAGES: TechFeatureImage[] = [
  {
    id: "javascript",
    label: "Javascript",
    image: {
      src: "/static/javascript.png",
      alt: "Javascript",
    },
  },
  {
    id: "nextjs",
    label: "Next.js",
    image: {
      src: "/static/nextjs.png",
      alt: "Next.js",
    },
  },
  {
    id: "wordpress",
    label: "WordPress",
    image: {
      src: "/static/wordpress.png",
      alt: "WordPress",
    },
  },
  
  {
    id: "react",
    label: "React",
    image: {
      src: "/static/react.png",
      alt: "React",
    },
  },
  {
    id: "woocommerce",
    label: "WooCommerce",
    image: {
      src: "/static/woocommerce.png",
      alt: "WooCommerce",
    },
  },
  {
    id: "shopify",
    label: "Shopify",
    image: {
      src: "/static/shopify.png",
      alt: "Shopify",
    },
  },
  {
    id: "stripe",
    label: "Stripe",
    image: {
      src: "/static/stripe.jpg",
      alt: "Stripe",
    },
  },
  {
    id: "google-analytics",
    label: "Google Analytics",
    image: {
      src: "/static/google-analytics.png",
      alt: "Google Analytics",
    },
  },
  {
    id: "speedy",
    label: "Speedy",
    image: {
      src: "/static/speedy.jpg",
      alt: "Speedy",
    },
  },
  {
    id: "econt",
    label: "Econt",
    image: {
      src: "/static/econt.png",
      alt: "Econt",
    },
  },
  {
    id: "paypal",
    label: "PayPal",
    image: {
      src: "/static/paypal.png",
      alt: "PayPal",
    },
  },
  {
    id: "boxnow",
    label: "BoxNow",
    image: {
      src: "/static/boxnow.png",
      alt: "BoxNow",
    },
  },
];

// Ползи за клиента (bullets)
export interface TechBenefit {
  id: string;
  text: Record<Locale, string>;
}

export const TECH_BENEFITS: TechBenefit[] = [
  {
    id: "fast-stable",
    text: {
      bg: "Бързи страници и стабилен сайт, които не дразнят потребителите и се харесват на Google.",
      en: "Fast, stable pages that keep visitors happy and make Google happy too.",
    },
  },
  {
    id: "no-lock-in",
    text: {
      bg: "Технологии, които всеки добър разработчик познава – не сте „заключени“ само към нас.",
      en: "A tech stack any good developer can work with, so you’re not locked in with a single provider.",
    },
  },
  {
    id: "easy-maintenance",
    text: {
      bg: "Лесна поддръжка и надграждане – не се налага да започвате от нулата при всяка промяна.",
      en: "Easy maintenance and future upgrades — no need to rebuild from scratch every time you want a change.",
    },
  },
  {
    id: "seo-foundation",
    text: {
      bg: "По-добра основа за SEO, реклама и анализ, благодарение на добре настроени инструменти и чист код.",
      en: "A stronger foundation for SEO, ads and analytics thanks to clean code and properly configured tools.",
    },
  },
  {
    id: "integrations",
    text: {
      bg: "Интеграции с любими системи – от плащания и резервации до CRM и автоматизации.",
      en: "Integrations with your favourite systems — from payments and bookings to CRM and automations.",
    },
  },
  {
    id: "chosen-for-needs",
    text: {
      bg: "Технологии, избрани според нуждите ви, а не защото са „модерни в момента“.",
      en: "Technologies chosen around your needs, not just because they’re trendy.",
    },
  },
  {
    id: "lower-risk",
    text: {
      bg: "По-малко технически рискове благодарение на доказани платформи и утвърдени практики.",
      en: "Fewer technical risks thanks to proven platforms and established best practices.",
    },
  },
];
