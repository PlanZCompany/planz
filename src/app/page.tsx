import FixedBackground from "@/components/Custom/FixedBackground";
import {
  CaseStudios,
  ContactForm,
  FAQSection,
  Process,
  Results,
  Services,
  Tech,
} from "@/components/Sections";
import Hero from "@/components/Sections/Hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlanZ – Изработка на уебсайтове и уеб разработка",
  description:
    "Създаваме подредени, бързи и надеждни уебсайтове за бизнеси, които имат нужда от ясно онлайн присъствие, техническа стабилност и добра основа за SEO.",
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://planz-seven.vercel.app/",
    title: "PlanZ – Изработка на уебсайтове и уеб разработка",
    description:
      "Създаваме подредени, бързи и надеждни уебсайтове за бизнеси, които имат нужда от ясно онлайн присъствие, техническа стабилност и добра основа за SEO.",
    siteName: "PlanZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanZ – Изработка на уебсайтове и уеб разработка",
    description:
      "Създаваме подредени, бързи и надеждни уебсайтове за бизнеси, които имат нужда от ясно онлайн присъствие, техническа стабилност и добра основа за SEO.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <FixedBackground />
      <Hero locale="bg" />
      <Services locale="bg" />
      <Process locale="bg" />
      <CaseStudios locale="bg" />
      <Results locale="bg" />
      <Tech locale="bg" />
      <FAQSection locale="bg" />
      <ContactForm locale="bg" />
    </main>
  );
}
