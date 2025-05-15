"use client"; // Root layout needs to be a client component for AnimatePresence to work with page changes

import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import PageWrapper from "../components/PageWrapper"; // Import PageWrapper
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // To get current path for AnimatePresence key
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });

// export const metadata = { // Metadata should be handled differently if layout is client component or moved to pages
// title: "Afghan Charity Shop - Hope & Help",
// description:
// "Supporting Afghan communities through aid, education, and cultural preservation.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current pathname

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Metadata can be added here or in individual page.js files using Head component from next/head */}
        <title>Afghan Charity Shop - Hope & Help</title>
        <meta
          name="description"
          content="Supporting Afghan communities through aid, education, and cultural preservation."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Afghan Charity Shop - Hope & Help" />
        <meta
          property="og:description"
          content="Supporting Afghan communities through aid, education, and cultural preservation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afghancharityshop.org/" />
        <meta
          property="og:image"
          content="https://afghancharityshop.org/og-image.jpg"
        />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Afghan Charity Shop - Hope & Help"
        />
        <meta
          name="twitter:description"
          content="Supporting Afghan communities through aid, education, and cultural preservation."
        />
        <meta
          name="twitter:image"
          content="https://afghancharityshop.org/og-image.jpg"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <PageWrapper key={pathname}>
            {/* Use pathname as key for AnimatePresence */}
            <main>{children}</main>
          </PageWrapper>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
