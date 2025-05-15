"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const charities = [
  {
    title: "Education & Skill Development",
    description:
      "Empowering individuals with knowledge and skills for a brighter future. We support literacy programs, vocational training, and educational resources.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    alt: "Children learning",
    color: "bg-blue-50",
  },
  {
    title: "Healthcare Access",
    description:
      "Ensuring communities have access to essential medical care, health education, and support services.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
    alt: "Healthcare professional with patient",
    color: "bg-green-50",
  },
  {
    title: "Poverty Alleviation",
    description:
      "Providing aid and resources to alleviate hardship and support sustainable livelihoods within communities.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop",
    alt: "Community support",
    color: "bg-amber-50",
  },
  {
    title: "Cultural Preservation",
    description:
      "Supporting initiatives that preserve and promote the rich cultural heritage of South Asian communities.",
    image:
      "https://images.unsplash.com/photo-1604873935283-3cef0b1c0d35?q=80&w=800&auto=format&fit=crop",
    alt: "Cultural event",
    color: "bg-purple-50",
  },
];

export default function SupportedCharitiesPage() {
  return (
    <div className="min-h-screen bg-afghan-white">
      {/* Hero Section */}
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
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1800&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        ></div>
        {/* Gradient Overlay */}
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

        {/* Hero Content */}
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
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              border: "none",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our Impact & Partnerships
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Together, we&apos;re making a lasting difference in South Asian
            communities through sustainable initiatives and meaningful
            partnerships.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="content-section py-16 md:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The proceeds from Afghan Charity Shop are dedicated to supporting
              various charitable organizations and projects benefiting South
              Asian communities, both locally in the UK and internationally. We
              believe in transparency and making a tangible difference.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={cardContainerVariants}
          >
            {charities.map((charity, index) => (
              <motion.div
                key={charity.title}
                className="group"
                variants={cardVariants}
              >
                <div
                  className={`h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${charity.color}`}
                >
                  <div className="relative h-64">
                    <Image
                      src={charity.image}
                      alt={charity.alt}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-afghan-blue">
                      {charity.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {charity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.section className="mt-24 text-center" variants={fadeIn}>
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-afghan-blue mb-6 border-none">
                Our Commitment
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We are committed to transparency and will provide regular
                  updates on the initiatives and specific charities we partner
                  with. Your support directly contributes to these vital
                  efforts.
                </p>
                <p>
                  Stay tuned for detailed impact reports and stories from the
                  communities we serve.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="button button-primary-blue button-large"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </div>
  );
}
