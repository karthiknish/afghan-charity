import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Shop" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/donate", label: "Donate" },
  { href: "/find-us", label: "Find Us" },
  { href: "/supported-charities", label: "Supported Charities" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

const locations = [
  {
    name: "Feltham",
    address: (
      <>
        Unit 9 Griffin Centre
        <br />
        Staines Road, Feltham
        <br />
        TW14 0HS
      </>
    ),

    hours: "10am-6.00pm",
    mapUrl:
      "https://maps.google.com/?q=Unit+9+Griffin+Centre,+Staines+Road,+Feltham+TW14+0HS",
  },
  {
    name: "Birmingham",
    address: (
      <>
        Unit 24,
        <br />
        Kenyon Forge, Kenyon St, Birmingham
        <br />
        B18 6DH
      </>
    ),

    hours: "10am-6.00pm",
    mapUrl:
      "https://maps.google.com/?q=Unit+24,+Kenyon+Forge,+Kenyon+St,+Birmingham+B18+6DH",
  },
  {
    name: "Liverpool",
    address: (
      <>
        295B, Hawthorne Road, Bootle, Liverpool,
        <br />
        L20 3AP
      </>
    ),

    hours: "10am-6.00pm",
    mapUrl:
      "https://maps.google.com/?q=295B,+Hawthorne+Road,+Bootle,+Liverpool,+L20+3AP",
  },
];

function AddressSlider({ locations }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === locations.length - 1 ? 0 : prev + 1));

  return (
    <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          aria-label="Previous location"
          onClick={prev}
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#1460aa",
            padding: 4,
            lineHeight: 1,
          }}
        >
          &#8592;
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div>
            <strong>{locations[current].name}</strong>
            <br />
            {locations[current].address}
            <br />
            <strong>Hours:</strong> {locations[current].hours}
            <br />
            <Link
              href={locations[current].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1460aa",
                textDecoration: "underline",
                fontSize: 13,
              }}
            >
              Click here for Google Map
            </Link>
          </div>
        </div>
        <button
          aria-label="Next location"
          onClick={next}
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#1460aa",
            padding: 4,
            lineHeight: 1,
          }}
        >
          &#8594;
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: 8 }}>
        {locations.map((_, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: idx === current ? "#1460aa" : "#ccc",
              margin: "0 3px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="afghan-divider" />
      <div
        className="w-full"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--padding-base)",
        }}
      >
        <div
          className="
            grid
            gap-6
            sm:gap-8
            mb-4
            grid-cols-1
            md:grid-cols-2
            items-start
          "
        >
          {/* Left column: About & Locations */}
          <div className="mb-4">
            <h4>Afghan Charity Shop</h4>
            <p>
              Dedicated to supporting Afghan communities through sustainable
              aid, education, and cultural preservation programs.
            </p>
            <AddressSlider locations={locations} />
          </div>
          {/* Right column: Quick Links & Social */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-8
              mb-4
            "
          >
            <div>
              <h4>Quick Links</h4>
              <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.7rem" }}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Connect With Us</h4>
              <div className="mb-4">
                <SocialIcons size={28} className="justify-start gap-4" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-afghan-blue hover:text-afghan-red transition-colors">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-afghan-blue/10 rounded-full">
                    <FaEnvelope size={18} />
                  </span>
                  <a
                    href="mailto:contact@afghancharityshop.co.uk"
                    className="hover:underline break-all"
                  >
                    contact@afghancharityshop.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3 text-afghan-blue hover:text-afghan-red transition-colors">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-afghan-blue/10 rounded-full">
                    <FaPhone size={18} />
                  </span>
                  <a href="tel:02035761165" className="hover:underline">
                    020 3576 1165
                  </a>
                </div>
              </div>
            </div>
          </div>
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
        <p>© {new Date().getFullYear()} Afghan Charity Shop.</p>{" "}
        <Link
          href="/terms"
          style={{
            color: "#1460aa",
            marginRight: 16,
            textDecoration: "underline",
            fontSize: 13,
          }}
        >
          Terms & Conditions
        </Link>
        <Link
          href="/privacy"
          style={{
            color: "#1460aa",
            textDecoration: "underline",
            fontSize: 13,
          }}
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
