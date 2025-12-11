import FixedBackground from "@/components/Custom/FixedBackground";
import Hero from "@/components/Sections/Hero";
import { ClashDisplay } from "../fonts";
import { Process, Services } from "@/components/Sections";

export default function HomePage() {
  return (
    <main className={`min-h-screen flex flex-col ${ClashDisplay.variable}`}>
      <FixedBackground />

      <Hero locale="en" />

      <Services locale="en" />
      <Process locale="en" />
    </main>
  );
}
