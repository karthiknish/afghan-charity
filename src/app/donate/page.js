"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shirt,
  BookOpen,
  Gem,
  Utensils,
  Tv,
  Gamepad2,
  Baby,
  Sofa,
  FlaskConical,
  MapPin,
  Clock,
  AlertTriangle,
  Gift,
  HandCoins,
} from "lucide-react";

const donateItems = [
  {
    icon: <Shirt className="text-afghan-blue w-10 h-10" />,
    label:
      "All types of Clothing and Clothing Accessories (belts, ties, scarves, hats & gloves)",
  },
  {
    icon: <Gem className="text-yellow-600 w-10 h-10" />,
    label: "Asian and Western jewellery",
  },
  {
    icon: <BookOpen className="text-green-700 w-10 h-10" />,
    label: "Hard and paperback books",
  },
  {
    icon: <Utensils className="text-amber-700 w-10 h-10" />,
    label: "Bric-a-brac, kitchen & dining ware, bedding & household goods",
  },
  {
    icon: <Tv className="text-gray-700 w-10 h-10" />,
    label: "All Electronics appliances",
  },
  {
    icon: <Gamepad2 className="text-indigo-600 w-10 h-10" />,
    label: "Games, movies (DVD) and music (CD's)",
  },
  {
    icon: <Baby className="text-pink-500 w-10 h-10" />,
    label: "Children and infant toys and equipment",
  },
  {
    icon: <Sofa className="text-rose-700 w-10 h-10" />,
    label: "Furniture",
  },
  {
    icon: <FlaskConical className="text-blue-400 w-10 h-10" />,
    label: "Toiletries",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function DonatePage() {
  return (
    <>
      {/* Hero Section Updated to match About Us style */}
      <motion.section
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(70vh - var(--header-height))", // Matched About Us hero height
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
        {/* Background Image - Using a donation-themed image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1800&h=800&fit=crop')", // Donation-themed image
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
            className="text-5xl md:text-6xl font-bold mb-6 text-afghan-white"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Support Our Cause
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              maxWidth: "700px",
              margin: "0 auto var(--margin-large) auto", // Added bottom margin
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Your generous contributions empower us to continue our mission.
            Every donation, no matter the size, makes a significant impact.
          </motion.p>
          {/* Buttons from original Donate page hero */}
        </motion.div>
      </motion.section>

      <motion.div
        style={{
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
        }}
        className="content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section: Got Stuff? - Interesting Split Section */}
        <motion.section
          className="grid grid-cols-1 gap-8 items-stretch mb-12"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* What You Can Donate */}
          <motion.div
            id="donate-list"
            className="bg-afghan-light-grey rounded-2xl shadow-lg p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2
                style={{ width: "100%" }}
                className="text-2xl font-bold text-afghan-blue text-center"
              >
                What You Can Donate
              </h2>
            </motion.div>
            <motion.p
              className="mb-6 text-gray-700 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              ACS specializes in recycled:
            </motion.p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ marginBottom: "0.5rem" }}
            >
              {donateItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 h-full text-center border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                  style={{
                    minHeight: 160,
                    justifyContent: "flex-start",
                  }}
                  custom={idx}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div
                    className="flex items-center justify-center rounded-full bg-afghan-light-grey/60 mb-3 shadow-sm"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-gray-900 text-base font-medium leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* How To Do It */}
          <motion.div
            id="how-to-donate"
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2
                style={{ width: "100%" }}
                className="text-2xl font-bold text-center text-afghan-blue"
              >
                How To Donate
              </h2>
            </motion.div>
            <div className="flex justify-center mb-6">
              <Image
                src="https://images.pexels.com/photos/8931674/pexels-photo-8931674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Donating clothes at Afghan Charity Shop"
                width={700}
                height={400}
                className="rounded-xl shadow-md max-w-full h-auto object-cover border border-gray-100"
                priority={false}
              />
            </div>
            <motion.div
              className="flex items-center mb-3 bg-gray-50 rounded-lg px-4 py-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <p className="text-gray-800">
                Drop off your donations during normal business hours at any of
                our 3 retail locations.&nbsp; See our{" "}
                <a href="/find-us" className="text-blue-600 underline">
                  Find Us
                </a>{" "}
                page for shop hours.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center mt-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-700 font-medium">
                Please do not leave donations outside the shop after business
                hours. Goods left overnight are often stolen or damaged.
              </p>
            </motion.div>
            <div className="flex justify-center mt-6">
              <Link
                style={{ color: "white" }}
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-afghan-blue text-white font-semibold rounded-lg shadow hover:bg-afghan-gold hover:text-afghan-blue transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
}
