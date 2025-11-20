import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/Context/Language/LanguageContext";
import AppWrapper from "@/Components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fonction pour récupérer les métadonnées selon la langue
const getMetadataByLang = (lang: string): Metadata => {
  const titles = {
    fr: "MassiliaDrive - VTC Premium à Marseille",
    en: "MassiliaDrive - Premium VTC in Marseille",
  };

  const descriptions = {
    fr: "Services de transfert haut de gamme, fiables et professionnels à Marseille et en région PACA.",
    en: "Premium, reliable and professional transfer services in Marseille and PACA region.",
  };

  const keywords =
    "VTC, Marseille, transfert, luxe, professionnel, aéroport, tourisme, business";

  return {
    metadataBase: new URL("https://massiliadrive-bnzj.vercel.app/"),
    title: titles[lang as keyof typeof titles] || titles["fr"],
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
    keywords: keywords,
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles["fr"],
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "MassiliaDrive - VTC Premium",
        },
      ],
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang as keyof typeof titles] || titles["fr"],
      description:
        descriptions[lang as keyof typeof descriptions] || descriptions["fr"],
    },
  };
};

// Fonction dynamique côté serveur pour générer les métadonnées
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.locale || "fr";
  return getMetadataByLang(lang);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.locale || "fr";

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <AppWrapper>{children}</AppWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
