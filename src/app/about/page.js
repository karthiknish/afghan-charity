"use client";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Recycle,
  Users,
  GraduationCap,
  Puzzle,
} from "lucide-react";
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
      icon: Heart,
      title: "Compassion",
      text: "We approach our work with empathy and a deep understanding of the needs of the communities we serve.",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Shield,
      title: "Integrity",
      text: "We operate with transparency and accountability, ensuring that all our actions are ethical and responsible.",
      color: "bg-blue-50",
      iconColor: "text-afghan-blue",
    },
    {
      icon: Recycle,
      title: "Sustainability",
      text: "We focus on creating long-term solutions that empower communities to thrive independently.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Inclusivity",
      text: "We embrace diversity and strive to create an environment where everyone feels valued and respected.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Respect",
      text: "We honor the culture, traditions, and dignity of every individual we interact with.",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Puzzle,
      title: "Collaboration",
      text: "We believe in the power of partnership and work closely with communities and other organizations to achieve our goals.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <>
      <head>
        <title>About Us | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Learn about the mission, vision, and values of Afghan Charity Shop, dedicated to supporting Afghan communities through sustainable initiatives."
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
              className="text-5xl md:text-6xl font-bold mb-6 text-afghan-white"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              About Afghan Charity Shop
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
              Dedicated to relief, health, education, and economic opportunity,
              with a special focus on Afghanistan.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Main Content Section */}
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
          <div className="max-w-5xl mx-auto">
            {/* Our Purpose */}
            <motion.div
              className="mb-16 md:mb-24 text-center"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-afghan-blue mb-6">
                Our Purpose
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                ACS was established to raise funds for the relief of poverty,
                oppression, and injustice as well as for the promotion of
                health, education and economic opportunity in the developing
                world with a special emphasis on Afghanistan.
              </p>
            </motion.div>

            {/* What We Do & Our Impact */}
            <div className="flex flex-wrap gap-10 lg:gap-16 items-start mb-16 md:mb-24">
              <motion.div
                className="flex-1 min-w-[280px] md:min-w-[320px]"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-semibold text-afghan-blue mb-4">
                  What We Do
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We specialise in selling high quality, recycled clothing,
                    accessories & household items.
                  </p>
                  <p>
                    We also seek to encourage economic development in
                    Afghanistan by creating sustainable outlets for ACS Artisans
                    -- micro and cottage industries being developed in
                    Afghanistan.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex-1 min-w-[280px] md:min-w-[320px]"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-semibold text-afghan-blue mb-4">
                  Our Impact Through Donations
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Donations generously provided from within the UK are carefully
                  selected for resale, benefiting both the local community and
                  the charities ACS supports from the sales proceeds.
                </p>
              </motion.div>
            </div>

            {/* Image section - Placeholder, can be customized */}
            <motion.div className="mb-16 md:mb-24" variants={fadeIn}>
              <Image
                src="https://images.pexels.com/photos/8580732/pexels-photo-8580732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Inside an Afghan Charity Shop or community project"
                width={1200}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full max-h-[400px]"
              />
            </motion.div>

            {/* Our Shops */}
            <motion.div
              className="mb-16 md:mb-24 text-center"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-afghan-blue mb-6">
                Our Shops
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                ACS&apos;s first shop was opened in Feltham in 2023 and we now
                have a total of 3 shops, which include Birmingham (2024) and
                Liverpool (2025). Come visit us!
              </p>
            </motion.div>

            {/* Why ACS? Section */}
            <motion.div variants={fadeIn} className="mb-16 md:mb-24">
              <h2
                style={{ width: "100%" }}
                className="text-3xl md:text-4xl font-bold text-afghan-blue mb-10 text-center"
              >
                Why Choose ACS?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-center">
                In the past decade, the number of UK charity shops has grown
                enormously. Why then another? Here&apos;s what special about
                ACS:
              </p>
              <h3 className="text-xl text-center font-semibold text-afghan-blue mb-2">
                Afghan is our speciality.
              </h3>
              <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
                <div className="p-6 bg-afghan-light-grey rounded-lg shadow flex flex-col items-center">
                  {/* Image placeholder for Fighting poverty */}
                  <div className="mb-4 w-full flex justify-center">
                    {/* Add your image here */}
                    <Image
                      src="https://images.pexels.com/photos/735446/pexels-photo-735446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Fighting poverty"
                      width={200}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-afghan-blue mb-2">
                    Fighting poverty.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Although Afghanistan is fast becoming an economic
                    powerhouse, it remains a land of extremes with millions
                    still impoverished. ACS&apos;s proceeds are concentrated
                    among organisations operating in Afghanistan seeking to
                    alleviate that remaining poverty.
                  </p>
                </div>
                <div className="p-6 bg-afghan-light-grey rounded-lg shadow flex flex-col items-center">
                  {/* Image placeholder for Reuse = good */}
                  <div className="mb-4 w-full flex justify-center">
                    {/* Add your image here */}
                    <Image
                      src="https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Reuse is good"
                      width={200}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-afghan-blue mb-2">
                    Reuse = good.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Not recycling? The fact is reuse of clothing is good for our
                    environment. According to the Charity Retail Association,
                    charity shops save over 360,000 tonnes of textiles each year
                    from their fate in a landfill and saves our environment from
                    all that nasty CO2. So give your clothes a 2nd life and help
                    the environment in the process.
                  </p>
                </div>
                <div className="p-6 bg-afghan-light-grey rounded-lg shadow flex flex-col items-center">
                  {/* Image placeholder for Quality goods, affordable prices */}
                  <div className="mb-4 w-full flex justify-center">
                    {/* Add your image here */}
                    <Image
                      src="https://images.pexels.com/photos/32119572/pexels-photo-32119572/free-photo-of-cozy-melbourne-books-and-coffee-store-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Quality goods, affordable prices"
                      width={200}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-afghan-blue mb-2">
                    Quality goods, affordable prices.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Who doesn&apos;t like a good deal? So come see our selection
                    of clothing, leisure and entertainment goods.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.section
              className="py-12 md:py-16"
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-afghan-blue mb-12 text-center">
                Our Core Values
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
                            strokeWidth={2.2}
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
    </>
  );
}
