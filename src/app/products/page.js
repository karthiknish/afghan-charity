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

export default function ProductsPage() {
  return (
    <>
      <head>
        <title>Our Products | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Explore the range of products offered by Afghan Charity Shop. Every purchase supports Afghan communities and charitable initiatives."
        />
      </head>
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
                "url('https://images.unsplash.com/photo-1706873251374-a174cea796e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              Our Collection
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
              Discover our curated selection of South Asian clothing,
              accessories, books, art, and ethically sourced treasures.
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
              <h2 className="text-4xl font-bold text-afghan-blue mb-6 border-none">
                Featured Categories
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                We offer a wide range of high-quality, recycled South Asian
                clothing, accessories, books, art, and household items.
                Additionally, we feature new and original fairly traded items
                produced in the developing world, supporting artisans and
                ethical practices.
              </p>
              <p className="text-lg font-semibold text-afghan-blue">
                Currently, our products are available for purchase in-store
                only. Please visit one of our locations!
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
              variants={cardContainerVariants}
            >
              <motion.div className="group" variants={cardVariants}>
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=800&auto=format&fit=crop"
                      alt="South Asian Clothing"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-afghan-blue">
                      Traditional & Modern Attire
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Beautiful sarees, kurtas, shawls, and more. Discover
                      unique pieces rich in culture.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="group" variants={cardVariants}>
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?q=80&w=800&auto=format&fit=crop"
                      alt="Accessories"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-afghan-blue">
                      Accessories & Jewelry
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Elegant jewelry, colorful scarves, handcrafted bags, and
                      other unique accessories.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="group" variants={cardVariants}>
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800&auto=format&fit=crop"
                      alt="Books and Art"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-afghan-blue">
                      Books, Art & Homeware
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A curated collection of literature, artistic pieces, and
                      charming items for your home.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.section className="mt-24 text-center" variants={fadeIn}>
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-afghan-blue mb-6">
                  Visit Our Shops
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Explore our full collection and find your next treasure in
                  person. Your purchases make a difference!
                </p>
                <Link
                  href="/contact#locations"
                  className="button button-primary-blue button-large"
                >
                  Find a Shop Near You
                </Link>
              </div>
            </motion.section>
          </div>
        </motion.section>
      </div>
    </>
  );
}
