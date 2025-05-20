"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <nav
          style={{
            minHeight: "80px", // Increased nav height
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 4rem",
          }}
        >
          <Link href="/" className="logo">
            {/* Afghan-inspired logo icon */}
            <Image
              src="/logo.png"
              alt="Afghan Charity Shop"
              width={120}
              height={120}
            />
          </Link>
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
          <ul className={mobileMenuOpen ? "mobile-active" : ""}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/products">What We Do</Link>
            </li>
            <li>
              <Link href="/find-us">Find Us</Link>
            </li>
            <li>
              <Link href="/supported-charities">Supported Charities</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <Link href="/donate" className="button button-primary-red">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="afghan-divider"
        style={{ marginBottom: 0, marginTop: 8 }}
      />
    </>
  );
}
