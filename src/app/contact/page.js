"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import Link from "next/link"; // Added Link for map links
import { MapPin, Phone, Clock } from "lucide-react"; // Added icons

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

// Copied shopLocations from find-us/page.js
const shopLocations = [
  {
    name: "Feltham",
    addressLines: [
      "Unit 9 Griffin Centre",
      "Staines Road, Feltham",
      "TW14 0HS",
    ],
    hours: "10am - 6.00pm",
    gmapsQuery: "Unit 9 Griffin Centre, Staines Road, Feltham, TW14 0HS",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Feltham_high_street_2.jpg",
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.007378116187!2d-0.4109588875897021!3d51.458020971684455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673110a53d1bf%3A0x2a92e7cbe10d15f6!2sGriffin%20Centre%2C%20Staines%20Rd%2C%20Feltham%20TW14%200HS%2C%20UK!5e0!3m2!1sen!2sin!4v1747634547580!5m2!1sen!2sin",
  },
  {
    name: "Birmingham",
    addressLines: ["Unit 24, Kenyon Forge", "Kenyon St, Birmingham", "B18 6DH"],
    hours: "10am - 6.00pm",
    gmapsQuery: "Unit 24, Kenyon Forge, Kenyon St, Birmingham, B18 6DH",
    imageSrc:
      "https://images.pexels.com/photos/7244373/pexels-photo-7244373.jpeg?auto=compress&cs=tinysrgb&w=800",
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.548863432649!2d-1.9098919875324554!3d52.487303571936025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd4d9d1be9eb%3A0xd9b6aeb34ec8c7bf!2zQWZnaGFuaXN0YW4gYW5kIENlbnRyYWwgQXNpYW4gQXNzb2NpYXRpb24gLSDYp9mG2KzZhdmGINin2YHYutin2YbYs9iq2KfZhiDZiCDYotiz24zYp9uMINmF24zYp9mG2Yc!5e0!3m2!1sen!2sin!4v1747634680952!5m2!1sen!2sin",
  },
  {
    name: "Liverpool",
    addressLines: ["295B, Hawthorne Road", "Bootle, Liverpool", "L20 3AP"],
    hours: "10am - 6.00pm",
    gmapsQuery: "295B, Hawthorne Road, Bootle, Liverpool, L20 3AP",
    imageSrc:
      "https://images.pexels.com/photos/2536478/pexels-photo-2536478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.9698462237093!2d-2.9861998874781728!3d53.45112527220449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23ef5a425c27%3A0xf9264c10143b4cf1!2s295B%20Hawthorne%20Rd%2C%20Bootle%20L20%203AP%2C%20UK!5e0!3m2!1sen!2sin!4v1747634720419!5m2!1sen!2sin",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
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
    <>
      {/* Hero Section Added to match About Us style */}
      <motion.section
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(70vh - var(--header-height))",
          color: "var(--afghan-white)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: "4rem",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image - Consistent with About Us */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.pexels.com/photos/63572/pexels-photo-63572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        ></div>
        {/* Gradient Overlay - Consistent with About Us */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(20, 96, 170, 0.8))",
            zIndex: 2,
          }}
        ></div>
        {/* Hero Content - Consistent with About Us structure */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "800px",
            padding: "0 var(--padding-medium)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-afghan-white"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We're here to help and answer any questions you might have.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.div
        className="content-section"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        style={{
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
        }}
      >
        <h1
          style={{
            width: "100%",
          }}
          className="text-center text-[var(--afghan-blue)]"
        >
          Contact Us
        </h1>
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
          {/* Shop Locations Section - Updated */}
          <motion.section
            id="locations"
            className="card p-0 md:p-0" // Removed default card padding for full-width map experience inside
            style={{ flex: "2 1 600px", minWidth: "300px" }} // Adjusted flex basis for wider section
            variants={sectionVariants}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-afghan-blue mb-6 text-center">
                Our Shop Locations
              </h2>
            </div>
            <div className="space-y-10">
              {shopLocations.map((shop, index) => (
                <motion.div
                  key={shop.name}
                  className="px-6 md:px-8 pb-8 mb-8 border-b last:border-b-0 last:mb-0"
                  variants={fadeIn} // Using simpler fadeIn from find-us page
                >
                  <h3 className="text-2xl font-semibold text-afghan-gold mb-4">
                    {shop.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <Image
                        src={shop.imageSrc}
                        alt={`Exterior or interior of ${shop.name} Afghan Charity Shop`}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded-lg shadow-md mb-4 md:mb-0"
                      />
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-afghan-blue mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {shop.addressLines.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-afghan-blue mr-2 flex-shrink-0" />
                        <span>{shop.hours}</span>
                      </div>
                    </div>
                  </div>
                  {shop.embedMapSrc && (
                    <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src={shop.embedMapSrc}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${shop.name} Location Map`}
                      ></iframe>
                    </div>
                  )}
                </motion.div>
              ))}
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
                passionate about making a difference and have some time to
                spare, we&apos;d be delighted to have you on our team.
              </p>
              <p>
                Please email us at{" "}
                <a
                  href="mailto:contact@afghancharityshop.co.uk"
                  className="text-link"
                >
                  contact@afghancharityshop.co.uk
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
    </>
  );
}
