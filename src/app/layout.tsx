import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Bazlamit | Senior Software Engineer",
  description: "Senior Backend Engineer specializing in Go, Distributed Systems, and High-Scale Infrastructure.",
  openGraph: {
    title: "Ali Bazlamit | Senior Software Engineer",
    description: "Senior Backend Engineer specializing in Go, Distributed Systems, and High-Scale Infrastructure.",
    url: "https://alibazlamit.com",
    siteName: "Ali Bazlamit Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Bazlamit | Senior Software Engineer",
    description: "Senior Backend Engineer specializing in Go, Distributed Systems, and High-Scale Infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground selection:bg-cyan-500/30`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
