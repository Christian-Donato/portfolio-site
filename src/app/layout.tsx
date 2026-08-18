import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${site.name} — ${site.seo.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.seo.description,
  keywords: [
    "Christian Donato",
    "Business Analyst",
    "Data Analyst",
    "Graduate Business Analyst",
    "Business Information Systems",
    "Macquarie University",
    "SQL",
    "Excel",
    "Process Improvement",
    "CRM",
    "Business Analysis",
    "Plenti",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description: site.seo.description,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
