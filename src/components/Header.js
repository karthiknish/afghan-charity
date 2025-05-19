"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
        <nav>
          <Link href="/" className="logo">
            {/* Afghan-inspired logo icon */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginRight: "10px",
                filter: "drop-shadow(0 0 8px var(--afghan-gold))",
              }}
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                fill="var(--afghan-blue)"
                stroke="var(--afghan-blue)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                fill="none"
                stroke="var(--afghan-red)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                fill="none"
                stroke="var(--afghan-green)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>Afghan Charity Shop</h2>
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
