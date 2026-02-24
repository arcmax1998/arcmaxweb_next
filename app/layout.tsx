// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arc-Max | PHP / Laravel Developer with 25 Years Experience",
    template: "%s | Arc-Max",
  },
  description:
    " PHP developer with 25 years of experience building custom CRM systems, e-commerce and payment solutions, enterprise web application, or a beautiful no-code WordPress website for your small business. Backend: Laravel, Core PHP, CodeIgniter, WordPress expert. Frontend: ReactJS, NextJS, VUEJS, Tailwind.",
keywords: [
    "PHP developer", 
    "Laravel expert", 
    "CodeIgniter developer", 
    "WordPress developer", 
    "custom CRM development", 
    "e-commerce development", 
    "payment solutions",
    "senior PHP programmer",
    "ReactJS developer",
    "NextJS developer",
    "VueJS developer",
    "full stack developer"
  ],
  metadataBase: new URL("https://www.arc-max.com"),
   openGraph: {
    type: "website",
    siteName: "Arc-Max",
    title: "Arc-Max | PHP / Laravel Developer with 25 Years Experience",
    description: "Senior PHP developer with 25 years of experience building custom CRM systems, e-commerce and payment solutions, and enterprise web applications.Backend: Laravel, Core PHP, CodeIgniter, WordPress expert. Frontend: ReactJS, NextJS, VUEJS, Tailwind",
    url: "https://www.arc-max.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc-Max | PHP / Laravel Developer",
    description: "25 years experience in Laravel, Core PHP, CodeIgniter, WordPress expert. Frontend: ReactJS, NextJS, VUEJS, Tailwind web development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Arc-Max" }],
  creator: "Arc-Max",
  publisher: "Arc-Max",
  alternates: {
    canonical: "https://www.arc-max.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen antialiased overflow-x-hidden bg-[#0A0B1E] text-neutral-100 selection:bg-blue-500/30 selection:text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
