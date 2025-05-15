import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
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
            Dedicated to supporting Afghan communities through sustainable aid,
            education, and cultural preservation programs.
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
          © {new Date().getFullYear()} Afghan Charity Shop. Registered Charity
          Number: 123456 (Placeholder).
        </p>
        <div style={{ marginTop: 8 }}>
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
      </div>
    </footer>
  );
}
