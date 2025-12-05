import type { Metadata } from "next";
import "./globals.css";
import { sansation } from "./fonts";
import Header from "@/components/Layout/Header";

export const metadata: Metadata = {
  title: "PlanZ – Уеб разработка и дигитални решения",
  description:
    "Създаваме подредени, бързи и надеждни уебсайтове за бизнеси, които ценят ясната комуникация и стабилната технология.",
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansation.variable}`}>
      <body className={`antialiased min-h-screen overflow-x-clip`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
