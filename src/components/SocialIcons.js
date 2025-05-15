"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
  const iconStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
    transition: "background-color 0.3s ease",
    color: "var(--afghan-white)",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
  };

  return (
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      <a
        href="#"
        aria-label="Facebook"
        className="social-icon-link"
        style={iconStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <FaFacebookF size={18} />
      </a>
      <a
        href="#"
        aria-label="Twitter"
        className="social-icon-link"
        style={iconStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <FaTwitter size={18} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="social-icon-link"
        style={iconStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
}
