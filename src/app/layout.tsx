import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hello, I'm Parvez. A full-stack web developer",
  description:
    "I’m Parvez, a full-stack web developer specializing in modern, user-friendly web design, fast and scalable web development, and custom WordPress solutions. Explore my portfolio to see high-performance projects and innovative solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg scroll-smooth">
      <body className={`${lexend.variable} ${lexend.className} antialiased `}>
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
          <ContactForm />
        </Providers>
      </body>
    </html>
  );
}
