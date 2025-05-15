"use client"; // Root layout needs to be a client component for AnimatePresence to work with page changes

import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";
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
      </head>
      <body>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <PageWrapper key={pathname}>
            {/* Use pathname as key for AnimatePresence */}
            <main>{children}</main>
          </PageWrapper>
        </AnimatePresence>
        <footer>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              textAlign: "left",
              padding: "0 var(--padding-base)",
            }}
          >
            <div style={{ flex: "1 1 300px", margin: "1rem" }}>
              <h4>Afghan Charity Shop</h4>
              <p>
                Dedicated to supporting Afghan communities through sustainable
                aid, education, and cultural preservation programs.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Address:</strong> 123 Charity Street, London, UK
                <br />
                <strong>Phone:</strong> (020) 1234 5678
                <br />
                <strong>Email:</strong> info@afghancharityshop.org
              </p>
            </div>
            <div style={{ flex: "1 1 200px", margin: "1rem" }}>
              <h4>Quick Links</h4>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li style={{ marginBottom: "0.7rem" }}>
                  <Link href="/about">About Us</Link>
                </li>
                <li style={{ marginBottom: "0.7rem" }}>
                  <Link href="/products">What We Do</Link>
                </li>
                <li style={{ marginBottom: "0.7rem" }}>
                  <Link href="/donate">Donate</Link>
                </li>
                <li style={{ marginBottom: "0.7rem" }}>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li style={{ marginBottom: "0.7rem" }}>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div style={{ flex: "1 1 200px", margin: "1rem" }}>
              <h4>Connect With Us</h4>
              <SocialIcons />
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            <p>
              © {new Date().getFullYear()} Afghan Charity Shop. Registered
              Charity Number: 123456 (Placeholder).
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
