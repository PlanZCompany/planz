import FixedBackground from "@/components/Custom/FixedBackground";
import Hero from "@/components/Sections/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <FixedBackground />

      <Hero locale="bg" />
    </main>
  );
}
