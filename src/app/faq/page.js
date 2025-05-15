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
    category: "About the Shop",
    items: [
      {
        question: "What is Afghan Charity Shop?",
        answer:
          "Afghan Charity Shop is a UK-based charity shop aimed at supporting South Asian communities. We sell recycled clothing, accessories, books, art, and fairly traded goods.",
      },
      {
        question: "Where do the proceeds go?",
        answer: (
          <>
            All proceeds support charitable projects and organizations
            benefiting South Asian communities in the UK and abroad. See our{" "}
            <a
              href="/supported-charities"
              className="text-blue-600 hover:underline font-medium"
            >
              Supported Charities
            </a>{" "}
            page for more info.
          </>
        ),
      },
    ],
  },
  {
    category: "Donations",
    items: [
      {
        question: "What items can I donate?",
        answer:
          "We accept high-quality, gently used South Asian clothing, accessories, books, art, and household items. Please ensure items are clean and in good condition.",
      },
      {
        question: "How can I donate goods?",
        answer: (
          <>
            You can bring your donations to any of our{" "}
            <a
              href="/contact#locations"
              className="text-blue-600 hover:underline font-medium"
            >
              shop locations
            </a>{" "}
            during our opening hours.
          </>
        ),
      },
      {
        question: "Can I make a monetary donation?",
        answer: (
          <>
            Yes! Monetary donations are greatly appreciated. Currently, you can
            donate in person at our shops. We are working on setting up online
            donations. Visit our{" "}
            <a
              href="/donate"
              className="text-blue-600 hover:underline font-medium"
            >
              Donate page
            </a>{" "}
            for more details.
          </>
        ),
      },
    ],
  },
  {
    category: "Volunteering",
    items: [
      {
        question: "How can I volunteer?",
        answer: (
          <>
            We are always looking for enthusiastic volunteers! Please visit our{" "}
            <a
              href="/contact#volunteer"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact page
            </a>{" "}
            for information on how to get involved.
          </>
        ),
      },
    ],
  },
  {
    category: "Shopping",
    items: [
      {
        question: "Do you sell items online?",
        answer:
          "Currently, our products are available for purchase in-store only. We encourage you to visit our shops to find unique items and support our cause.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="content-section">
      <motion.div
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-extrabold text-center mb-16 text-[var(--afghan-blue)]">
          Frequently Asked Questions
        </h1>

        {faqsData.map((section) => (
          <motion.section
            key={section.category}
            className="mb-12"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-8 text-[var(--afghan-blue)] border-b-2 border-[var(--afghan-gold)] pb-3">
              {section.category}
            </h2>
            <div className="space-y-6">
              {section.items.map((item) => (
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
                      {typeof item.answer === "string" ? (
                        <p className="text-sm sm:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      ) : (
                        <div className="text-sm sm:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
}
