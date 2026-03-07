import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlanZ – Custom website development and web services",
  description:
    "We design and build clear, fast and reliable websites for businesses that need a solid online presence, technical stability and a strong foundation for SEO.",
  alternates: {
    canonical: "/en",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://planz-seven.vercel.app/en",
    title: "PlanZ – Custom website development and web services",
    description:
      "We design and build clear, fast and reliable websites for businesses that need a solid online presence, technical stability and a strong foundation for SEO.",
    siteName: "PlanZ",
    images: [
      {
        url: "https://planz-seven.vercel.app/og-image-en.png",
        width: 1200,
        height: 630,
        alt: "PlanZ – Изработка на уебсайтове и уеб разработка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanZ – Custom website development and web services",
    description:
      "We design and build clear, fast and reliable websites for businesses that need a solid online presence, technical stability and a strong foundation for SEO.",
    images: ["https://planz-seven.vercel.app/og-image-en.png"],
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
  //TODO return the robots
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
