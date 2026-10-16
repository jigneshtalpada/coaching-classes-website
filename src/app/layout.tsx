import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premier Coaching Institute`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Coaching Institute",
    "Tuition Classes",
    "JEE Main",
    "NEET Preparation",
    "CBSE Tuition",
    "State Board Coaching",
    "Competitive Exam Preparation",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Premium Coaching Institute`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
