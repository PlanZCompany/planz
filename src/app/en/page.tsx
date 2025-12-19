import FixedBackground from "@/components/Custom/FixedBackground";
import Hero from "@/components/Sections/Hero";
import { ClashDisplay } from "../fonts";
import {
  CaseStudios,
  ContactForm,
  FAQSection,
  Process,
  Results,
  Services,
  Tech,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <main className={`min-h-screen flex flex-col ${ClashDisplay.variable}`}>
      <FixedBackground />

      <Hero locale="en" />

      <Services locale="en" />
      <Process locale="en" />
      <CaseStudios locale="en" />
      <Results locale="en" />
      <Tech locale="en" />
      <FAQSection locale="en" />

      <ContactForm locale="en" />
    </main>
  );
}
