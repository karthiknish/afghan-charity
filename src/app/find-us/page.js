"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

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
    imageSrc: "/feltham.jpg", // Placeholder image
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.007378116187!2d-0.4109588875897021!3d51.458020971684455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673110a53d1bf%3A0x2a92e7cbe10d15f6!2sGriffin%20Centre%2C%20Staines%20Rd%2C%20Feltham%20TW14%200HS%2C%20UK!5e0!3m2!1sen!2sin!4v1747634547580!5m2!1sen!2sin",
  },
  {
    name: "Birmingham",
    addressLines: ["Unit 24, Kenyon Forge", "Kenyon St, Birmingham", "B18 6DH"],
    hours: "10am - 6.00pm",
    gmapsQuery: "Unit 24, Kenyon Forge, Kenyon St, Birmingham, B18 6DH",
    imageSrc: "/birmingham.jpg", // Placeholder image
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.548863432649!2d-1.9098919875324554!3d52.487303571936025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd4d9d1be9eb%3A0xd9b6aeb34ec8c7bf!2zQWZnaGFuaXN0YW4gYW5kIENlbnRyYWwgQXNpYW4gQXNzb2NpYXRpb24gLSDYp9mG2KzZhdmGINin2YHYutin2YbYs9iq2KfZhiDZiCDYotiz24zYp9uMINmF24zYp9mG2Yc!5e0!3m2!1sen!2sin!4v1747634680952!5m2!1sen!2sin",
  },
  {
    name: "Liverpool",
    addressLines: ["295B, Hawthorne Road", "Bootle, Liverpool", "L20 3AP"],
    hours: "10am - 6.00pm",
    gmapsQuery: "295B, Hawthorne Road, Bootle, Liverpool, L20 3AP",
    imageSrc: "/liverpool.jpeg", // Placeholder image
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.9698462237093!2d-2.9861998874781728!3d53.45112527220449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23ef5a425c27%3A0xf9264c10143b4cf1!2s295B%20Hawthorne%20Rd%2C%20Bootle%20L20%203AP%2C%20UK!5e0!3m2!1sen!2sin!4v1747634720419!5m2!1sen!2sin",
  },
];

export default function FindUsPage() {
  return (
    <>
      <head>
        <title>Find Our Shops | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Locate Afghan Charity Shop branches in Feltham, Birmingham, and Liverpool. Find addresses, opening hours, and map links."
        />
      </head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.section
          className="hero-section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(65vh)", // Matched About Us hero height
            color: "var(--afghan-white)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            marginBottom: "4rem", // Matched About Us hero margin
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Image - Using the same as About Us for consistency, can be changed */}
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
          {/* Gradient Overlay - Matched About Us */}
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

          {/* Hero Content - Matched About Us structure */}
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
              className="text-5xl md:text-6xl font-bold mb-6 text-afghan-white" // mb-6 like About Us
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Find Our Shops
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl" // Removed text-afghan-gold, matching About Us p style
              style={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                maxWidth: "700px", // Matched About Us
                margin: "0 auto", // Matched About Us
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              It&apos;s All About Location. Visit one of our shops in England.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Shops Grid Section */}
        <motion.section
          className="content-section py-12 md:py-20"
          style={{
            background: "var(--afghan-white)",
            paddingLeft: "var(--padding-large)",
            paddingRight: "var(--padding-large)",
          }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {shopLocations.map((shop, index) => (
                <motion.div
                  key={shop.name}
                  className="card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={shop.imageSrc}
                    alt={`Exterior or interior of ${shop.name} Afghan Charity Shop`}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-afghan-blue mb-3">
                      {shop.name}
                    </h2>
                    <div className="space-y-2 text-gray-700 mb-4 flex-grow">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-afghan-gold mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {shop.addressLines.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-afghan-gold mr-2 flex-shrink-0" />
                        <span>{shop.hours}</span>
                      </div>
                    </div>

                    {shop.embedMapSrc && (
                      <div className="mt-4 border-t pt-4">
                        <iframe
                          src={shop.embedMapSrc}
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${shop.name} Location Map`}
                        ></iframe>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
