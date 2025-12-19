import type { Metadata } from "next";
import "./globals.css";
import { ClashDisplay, sansation } from "./fonts";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Aside from "@/components/Custom/Aside";
import ScrollDown from "@/components/Custom/ScrollDown";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlanZ – Изработка на уебсайтове и уеб разработка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanZ – Изработка на уебсайтове и уеб разработка",
    description:
      "Създаваме подредени, бързи и надеждни уебсайтове за бизнеси, които имат нужда от ясно онлайн присъствие, техническа стабилност и добра основа за SEO.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PlanZ",
    url: "https://planz-seven.vercel.app/",
    logo: "https://planz-seven.vercel.app/static/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "your-email@example.com",
      availableLanguage: ["bg", "en"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PlanZ",
    url: "https://planz-seven.vercel.app/",
    inLanguage: "bg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://planz-seven.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${sansation.variable} ${ClashDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`antialiased min-h-screen overflow-x-clip`}>
        <Header />
        <ScrollDown />
        {children}
        <Aside />
        <Footer />
      </body>
    </html>
  );
}
