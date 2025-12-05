import localFont from "next/font/local";

export const sansation = localFont({
  src: [
    { path: "./fonts/Sansation-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Sansation-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Sansation-Italic.woff2", weight: "400", style: "italic" },
    {
      path: "./fonts/Sansation-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sansation",
  fallback: ["ui-sans-serif", "system-ui", "Arial"],
  adjustFontFallback: "Arial",
});

export const ClashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
    { path: "./fonts/ClashDisplay-Bold.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-clash",
  fallback: ["ui-sans-serif", "system-ui", "Arial"],
  adjustFontFallback: "Arial",
});
