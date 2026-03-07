import FixedBackground from "@/components/Custom/FixedBackground";
import OfferCardModal from "@/components/Modal/OfferCardModal";
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

      <OfferCardModal locale="bg" />
    </main>
  );
}
