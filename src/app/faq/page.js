"use client";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const faqsData = [
  {
    question: "Does ACS offer a doorstep collection or delivery service?",
    answer: (
      <>
        Yes, it depends on the distance from our shops and the products
        involved.
      </>
    ),
  },
  {
    question: "Will you accept clothing that's heavily stained or torn?",
    answer: (
      <>
        Yes. We can sell poor conditioned clothing items to a supplier where
        they will be recycled or exported to other developing nations. So even
        clothing items you might throw away can still raise money to help
        support charities in Afghanistan.
      </>
    ),
  },
  {
    question: "Can I volunteer at ACS?",
    answer: (
      <>
        Yes. ACS heavily relies on volunteers to keep our shops running. Please
        stop by your local shop and speak to the manager about volunteer
        opportunities.
      </>
    ),
  },
];

export default function FAQPage() {
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
              "url('https://images.pexels.com/photos/4246264/pexels-photo-4246264.jpeg?auto=compress&cs=tinysrgb&w=800')",
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
            Your Questions Answered
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
            Find answers to common questions about donations, volunteering, and
            our shops.
          </motion.p>
        </motion.div>
      </motion.section>

      <div className="content-section">
        <motion.div
          className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-extrabold text-center mb-12 text-[var(--afghan-blue)]">
            Frequently Asked Questions
          </h1>
          <div className="space-y-8">
            {faqsData.map((item, idx) => (
              <motion.div
                key={item.question}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-[var(--afghan-light-grey)] p-2"
                variants={cardVariants}
              >
                <details className="">
                  <summary className="flex items-center justify-between w-full p-8 font-medium text-left cursor-pointer list-none hover:bg-[var(--afghan-light-grey)]/50 group-open:bg-[var(--afghan-blue)] group-open:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--afghan-blue)] focus-visible:ring-offset-2">
                    <span className="text-base sm:text-lg text-[var(--afghan-black)] group-open:text-white">
                      {item.question}
                    </span>
                    <FaChevronDown className="w-5 mr-2 h-5 sm:w-6 sm:h-6 text-[var(--afghan-medium-grey)] transition-transform duration-200 transform group-open:rotate-180 group-open:text-white flex-shrink-0 ml-2" />
                  </summary>
                  <div className="p-8 text-[var(--afghan-black)]/90 bg-white border-t border-[var(--afghan-light-grey)] group-open:border-[var(--afghan-blue)]/30">
                    <div className="text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
