import FixedBackground from "@/components/Custom/FixedBackground";
import Hero from "@/components/Sections/Hero";
import { ClashDisplay } from "../fonts";

export default function HomePage() {
  return (
    <main className={`min-h-screen flex flex-col ${ClashDisplay.variable}`}>
      <FixedBackground />

      <Hero locale="en" />
    </main>
  );
}
