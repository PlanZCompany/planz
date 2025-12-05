import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlanZ – Web development and digital solutions",
  description:
    "We design and build clear, fast and reliable websites for businesses that value clear communication and stable technology.",
  alternates: {
    canonical: "/en",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
