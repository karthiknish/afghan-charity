"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations

// Animation variants (optional, but good for consistency with other pages)
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  marginBottom: "1.25rem",
  border: "1px solid var(--afghan-light-grey)",
  borderRadius: "var(--border-radius)",
  backgroundColor: "var(--afghan-white)",
  color: "var(--afghan-black)",
  fontSize: "0.95rem",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  color: "var(--afghan-blue)",
  fontWeight: "600",
  fontSize: "0.9rem",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        setStatusMessage(result.message || "Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
      } else {
        setSubmissionStatus("error");
        setStatusMessage(result.error || "An unknown error occurred.");
      }
    } catch (error) {
      setSubmissionStatus("error");
      setStatusMessage(
        "Failed to connect to the server. Please try again later."
      );
      console.error("Form submission error:", error);
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      className="content-section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="text-center text-[var(--afghan-blue)]">Contact Us</h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "var(--margin-large)",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "var(--afghan-black)",
        }}
      >
        We&apos;d love to hear from you! Whether you have a question, want to
        volunteer, or wish to learn more about our work, please get in touch.
      </p>

      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--margin-large)",
        }}
        variants={sectionVariants} // Apply to container for staggered children
        initial="hidden"
        animate="visible"
      >
        {/* Shop Locations Section */}
        <motion.section
          id="locations"
          className="card"
          style={{ flex: "1 1 400px", minWidth: "300px" }}
          variants={sectionVariants}
        >
          <h2 className="text-[var(--afghan-blue)]">Our Shop Locations</h2>
          <div style={{ marginBottom: "1.5rem" }}>
            <Image
              src="https://images.unsplash.com/photo-1693337454286-02c884323fd6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Charity shop front with traditional textiles"
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--border-radius)",
                marginBottom: "1rem",
                objectFit: "cover",
              }}
            />
            <h3 className="text-[var(--afghan-gold)]">Main Branch</h3>
            <p>123 Charity Street, London, UK</p>
            <p>Phone: (020) 1234 5678</p>
            <p>
              Email:{" "}
              <a href="mailto:info@afghancharityshop.org" className="text-link">
                info@afghancharityshop.org
              </a>
            </p>
            <p>Hours: Mon-Sat, 10:00 AM - 6:00 PM</p>
          </div>
        </motion.section>

        {/* Volunteer & General Inquiries Column */}
        <motion.div
          style={{
            flex: "1 1 400px",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "var(--margin-large)",
          }}
          variants={sectionVariants}
        >
          {/* Volunteer Section */}
          <motion.section
            id="volunteer"
            className="card"
            variants={sectionVariants}
          >
            <h2 className="text-[var(--afghan-blue)]">Volunteer With Us</h2>
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Group of diverse volunteers smiling"
              width={350}
              height={180}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--border-radius)",
                marginBottom: "1rem",
                objectFit: "cover",
              }}
            />
            <p>
              Volunteers are the heart of our organization. If you&apos;re
              passionate about making a difference and have some time to spare,
              we&apos;d be delighted to have you on our team.
            </p>
            <p>
              Please email us at{" "}
              <a
                href="mailto:volunteer@afghancharityshop.org"
                className="text-link"
              >
                volunteer@afghancharityshop.org
              </a>{" "}
              or use the form below for general inquiries.
            </p>
          </motion.section>

          {/* General Inquiries Section - FORM */}
          <motion.section className="card" variants={sectionVariants}>
            <h2 className="text-[var(--afghan-blue)]">Send Us a Message</h2>

            <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" style={labelStyle}>
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  style={inputStyle}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  style={{ ...inputStyle, height: "auto" }}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {submissionStatus === "success" && (
                <p
                  style={{
                    color: "var(--afghan-green)",
                    marginBottom: "1rem",
                    border: "1px solid var(--afghan-green)",
                    padding: "0.75rem",
                    borderRadius: "var(--border-radius)",
                    backgroundColor: "rgba(0,119,73,0.05)",
                  }}
                >
                  {statusMessage}
                </p>
              )}
              {submissionStatus === "error" && (
                <p
                  style={{
                    color: "var(--afghan-red)",
                    marginBottom: "1rem",
                    border: "1px solid var(--afghan-red)",
                    padding: "0.75rem",
                    borderRadius: "var(--border-radius)",
                    backgroundColor: "rgba(206,17,38,0.05)",
                  }}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="button button-primary-blue button-large"
                disabled={isLoading}
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.section>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
