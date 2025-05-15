"use client";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaRecycle,
  FaUsers,
  FaGraduationCap,
  FaPuzzlePiece,
} from "react-icons/fa";
import Image from "next/image";

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

export default function AboutPage() {
  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      text: "We approach our work with empathy and a deep understanding of the needs of the communities we serve.",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      text: "We operate with transparency and accountability, ensuring that all our actions are ethical and responsible.",
      color: "bg-blue-50",
      iconColor: "text-afghan-blue",
    },
    {
      icon: FaRecycle,
      title: "Sustainability",
      text: "We focus on creating long-term solutions that empower communities to thrive independently.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: FaUsers,
      title: "Inclusivity",
      text: "We embrace diversity and strive to create an environment where everyone feels valued and respected.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: FaGraduationCap,
      title: "Respect",
      text: "We honor the culture, traditions, and dignity of every individual we interact with.",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: FaPuzzlePiece,
      title: "Collaboration",
      text: "We believe in the power of partnership and work closely with communities and other organizations to achieve our goals.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              "url('https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=1800&auto=format&fit=crop')",
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
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our Story & Mission
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Empowering Afghan communities through sustainable initiatives,
            cultural preservation, and compassionate support.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="content-section py-16 md:py-24"
        style={{
          background: "var(--afghan-white)",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* About Content */}
          <div className="flex flex-wrap gap-12 lg:gap-16 items-center mb-24">
            <motion.div className="flex-1 min-w-[300px]" variants={fadeIn}>
              <h2 className="text-4xl font-bold text-afghan-blue mb-8">
                Who We Are
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Afghan Charity is a chain of UK based charity shops
                  established to benefit South Asian communities both in the UK
                  and abroad.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We specialize in selling high quality, recycled South Asian
                  clothing and accessories as well as books, art and general
                  household items. We also distribute new and original fairly
                  traded items produced in the developing world.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Our mission is to empower individuals and communities through
                  sustainable initiatives that preserve cultural heritage while
                  building bridges to a brighter future.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex-1 min-w-[300px]" variants={fadeIn}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&h=600&auto=format&fit=crop"
                  alt="Diverse community gathering"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                {/* Decorative element */}
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10"
                  style={{
                    background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231460aa' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.section
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-16 pb-8"
          >
            <h2 className="text-4xl font-bold text-afghan-blue text-center mb-16">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={cardVariants}
                    className="group"
                  >
                    <div className="h-full flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                      <div
                        className={`w-20 h-20 flex items-center justify-center ${value.color} rounded-2xl mb-6 transform transition-transform group-hover:scale-110 duration-300`}
                      >
                        <IconComponent
                          className={`w-10 h-10 ${value.iconColor}`}
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-afghan-blue">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </motion.section>
    </div>
  );
}
