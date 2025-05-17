"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  BookOpen,
  Users,
  LifeBuoy,
  HandCoins,
  Gift,
  PartyPopper,
  HelpingHand,
  HandHeart,
} from "lucide-react";

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

const impactIcons = [
  <LifeBuoy
    key="aid"
    size={28}
    className="text-afghan-blue mr-2"
    aria-label="Emergency Relief Icon"
  />,
  <BookOpen
    key="edu"
    size={28}
    className="text-afghan-blue mr-2"
    aria-label="Education Icon"
  />,
  <Users
    key="community"
    size={28}
    className="text-afghan-blue mr-2"
    aria-label="Community Icon"
  />,
];

const involvementIcons = [
  <HelpingHand
    key="volunteer"
    size={22}
    className="text-afghan-green mr-2"
    aria-label="Volunteer Icon"
  />,
  <Gift
    key="goods"
    size={22}
    className="text-afghan-gold mr-2"
    aria-label="Goods Donation Icon"
  />,
  <PartyPopper
    key="fundraise"
    size={22}
    className="text-afghan-red mr-2"
    aria-label="Fundraise Icon"
  />,
];

export default function HomePage() {
  const impactAreas = [
    {
      image:
        "https://images.unsplash.com/photo-1720038561037-430fe0f20224?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Emergency Relief Programs",
      title: "Emergency Relief",
      description:
        "We provide essential resources including food, shelter, clothing, and healthcare to Afghan families facing crisis situations both in the UK and abroad.",
      link: "/products#aid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400&h=220",
      alt: "Education Programs",
      title: "Education & Skills",
      description:
        "Our educational initiatives offer schooling for children and vocational training for adults, empowering them with skills for a brighter future.",
      link: "/products#education",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400&h=220",
      alt: "Community Support",
      title: "Community Support",
      description:
        "We foster community development through cultural programs, integration support, and mental health services, building resilient communities.",
      link: "/products#community",
    },
  ];

  const involvementWays = [
    {
      image:
        "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Volunteers working together",
      title: "Volunteer With Us",
      description:
        "Dedicate your time and skills to make a direct impact. We have various roles available, both remote and in-person.",
      buttonText: "Become a Volunteer",
      link: "/contact?subject=Volunteering",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Donation box with supplies",
      title: "Donate Goods",
      description:
        "Contribute essential items like clothing, books, or household goods to support families in need.",
      buttonText: "Arrange a Donation",
      link: "/contact?subject=Goods%20Donation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751187-da63f7e2b4eb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "People at a fundraising event",
      title: "Fundraise For Us",
      description:
        "Organize or participate in fundraising events to help us gather the resources needed for our projects.",
      buttonText: "Start Fundraising",
      link: "/donate#fundraise",
    },
  ];

  return (
    <>
      {/* --- Enhanced Hero Section with Afghan Imagery --- */}
      <motion.section
        className="hero-section flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] md:min-h-[85vh] bg-[rgba(20,96,170,0.75)] px-4 md:px-12 lg:px-24 gap-8 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Charity Video Left */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            src="/charity-new.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/file.svg"
            className="rounded-2xl shadow-xl w-full max-w-[360px] aspect-[9/16] object-cover bg-black"
            aria-label="Charity video showing Afghan Charity Shop in action"
          />
        </div>
        {/* Hero Content Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center text-left space-y-6 max-w-xl">
          <HeartHandshake
            size={48}
            className="text-afghan-gold mb-2"
            aria-label="Charity and support icon"
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-afghan-blue mb-2 flex items-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Supporting Afghan Communities
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-afghan-dark-grey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Join Afghan Charity Shop in our mission to provide essential
            support, education, and opportunity for Afghan communities in need
            both in the UK and abroad.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href="/donate"
              className="button button-primary-red button-large uppercase tracking-wider flex items-center"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="button button-outline-white button-large flex items-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Mission Statement with Cultural Element --- */}
      <motion.section
        className="content-section"
        style={{
          textAlign: "center",
          background: "var(--afghan-white)",
          borderBottom: "1px solid var(--afghan-light-grey)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ position: "relative" }}>
          {/* Decorative element inspired by Afghan patterns */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "5%",
              width: "80px",
              height: "80px",
              opacity: 0.07,
              background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231460aa' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "5%",
              width: "80px",
              height: "80px",
              opacity: 0.07,
              background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231460aa' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
              zIndex: 0,
            }}
          />

          <motion.h2
            style={{
              color: "var(--afghan-blue)",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HeartHandshake
              size={28}
              className="text-afghan-gold mr-1"
              aria-label="Mission Icon"
            />
            Our Mission
          </motion.h2>
          <motion.p
            style={{
              maxWidth: "850px",
              margin: "0 auto var(--margin-large) auto",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "var(--afghan-black)",
              position: "relative",
              zIndex: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Users
              size={18}
              className="inline-block text-afghan-blue mr-1 align-text-bottom"
              aria-label="Community Icon"
            />
            The Afghan Charity Shop is dedicated to improving lives through
            sustainable aid, education, and community building. We believe in
            empowering individuals and families to create lasting change in
            their communities. Our initiatives focus on preserving cultural
            heritage while addressing immediate needs and creating pathways to
            self-sufficiency.
          </motion.p>
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--padding-base)",
              position: "relative",
              zIndex: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="/about"
              className="button button-primary-blue flex items-center"
            >
              Our Story
            </Link>
            <Link
              href="/products"
              className="button button-primary-green flex items-center"
            >
              Our Impact
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Key Focus Areas --- */}
      <motion.section
        className="content-section"
        style={{
          backgroundColor: "var(--afghan-light-grey)",
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          style={{
            textAlign: "center",
            color: "var(--afghan-blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Users
            size={28}
            className="text-afghan-blue mr-1"
            aria-label="Impact Areas Icon"
          />
          Our Areas of Impact
        </motion.h2>
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--margin-large)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={area.image}
                alt={area.alt}
                width={400}
                height={220}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "var(--border-radius) var(--border-radius) 0 0",
                }}
              />
              <div
                style={{
                  padding: "var(--padding-base)",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {impactIcons[index]}
                  {area.title}
                </h3>
                <p style={{ flexGrow: 1 }}>{area.description}</p>
                <Link
                  href={area.link}
                  className="button button-primary-red button-small flex items-center"
                  style={{ marginTop: "auto" }}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- Stories & Impact Section with Afghan Cultural Elements --- */}
      <section
        className="content-section"
        style={{
          background:
            "linear-gradient(135deg, var(--afghan-white) 0%, var(--afghan-white) 60%, rgba(20, 96, 170, 0.05) 100%)",
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "var(--afghan-blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <BookOpen
            size={24}
            className="text-afghan-blue mr-1"
            aria-label="Stories Icon"
          />
          Stories of Hope
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--margin-large)",
          }}
        >
          {/* Story 1 */}
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1590273466070-40c466b4432d?auto=format&fit=crop&q=80&w=350&h=200"
              alt="Impact Story 1"
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "var(--border-radius) var(--border-radius) 0 0",
              }}
            />
            <div style={{ padding: "var(--padding-base)" }}>
              <h4
                style={{
                  color: "var(--afghan-gold)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  marginBottom: "0.3rem",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <BookOpen
                  size={16}
                  className="text-afghan-gold mr-1"
                  aria-label="Education Icon"
                />
                EDUCATION
              </h4>
              <h3 style={{ marginTop: 0 }}>
                Nasrin&apos;s Journey to University
              </h3>
              <p>
                From refugee to scholarship recipient, Nasrin&apos;s
                determination and our educational support program opened doors
                to higher education and a brighter future... education and a
                brighter future...
              </p>
              <Link
                href="/about#stories"
                className="button button-primary-blue button-small flex items-center"
                style={{
                  display: "inline-block",
                  marginTop: "var(--margin-base)",
                }}
              >
                Read More
              </Link>
            </div>
          </div>
          {/* Story 2 */}
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Impact Story 2"
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "var(--border-radius) var(--border-radius) 0 0",
              }}
            />
            <div style={{ padding: "var(--padding-base)" }}>
              <h4
                style={{
                  color: "var(--afghan-gold)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  marginBottom: "0.3rem",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <Users
                  size={16}
                  className="text-afghan-gold mr-1"
                  aria-label="Community Icon"
                />
                COMMUNITY
              </h4>
              <h3 style={{ marginTop: 0 }}>Rebuilding Together</h3>
              <p>
                Our community center in East London provides a gathering place
                where Afghan families can access resources, celebrate
                traditions, and build new connections...
              </p>
              <Link
                href="/about#news"
                className="button button-primary-blue button-small flex items-center"
                style={{
                  display: "inline-block",
                  marginTop: "var(--margin-base)",
                }}
              >
                Full Story
              </Link>
            </div>
          </div>
          {/* Donation Call to Action Card */}
          <div
            className="card"
            style={{
              color: "var(--afghan-white)",
              background:
                "linear-gradient(135deg, var(--afghan-blue) 0%, #104d8a 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{ padding: "var(--padding-large)", textAlign: "center" }}
            >
              <h3
                style={{
                  color: "var(--afghan-white)",
                  borderBottom: "none",
                  marginTop: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                Make a Difference Today
              </h3>
              <p style={{ fontSize: "1.05rem" }}>
                Your generous support allows us to continue our mission of
                providing hope, resources, and opportunities to Afghan families
                in need.
              </p>
              <Link
                href="/donate"
                className="button button-outline-white button-large flex items-center"
                style={{ marginTop: "var(--margin-base)" }}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action Section with Afghan Pattern --- */}
      <motion.section
        className="content-section"
        style={{
          backgroundColor: "var(--afghan-dark-grey)",
          color: "var(--afghan-white)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
          marginTop: 0,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Afghan-inspired decorative pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            zIndex: 0,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.h2
            className="text-center"
            style={{
              color: "var(--afghan-white)",
              borderBottomColor: "var(--afghan-gold)",
              display: "inline-block",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HandHeart
              size={24}
              className="text-afghan-gold mr-1"
              aria-label="Get Involved Icon"
            />
            Get Involved Today
          </motion.h2>
          <motion.p
            style={{
              maxWidth: "700px",
              margin: "0 auto var(--margin-large) auto",
              fontSize: "1.15rem",
              color: "var(--afghan-light-grey)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Users
              size={18}
              className="text-afghan-gold mr-1"
              aria-label="Community Icon"
            />
            There are many ways to support our mission. Whether through
            donations, volunteering, or spreading awareness, your contribution
            makes a real difference in the lives of Afghan families.
          </motion.p>
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--margin-large)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="/donate"
              className="button button-primary-red button-large flex items-center"
            >
              Donate Securely
            </Link>
            <Link
              href="/contact#volunteer"
              className="button button-outline-white button-large flex items-center"
            >
              Volunteer With Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Call to Action: How to Help --- */}
      <motion.section
        className="content-section"
        style={{
          backgroundColor: "var(--afghan-gold-muted)",
          paddingLeft: "var(--padding-large)",
          paddingRight: "var(--padding-large)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-center"
          style={{
            color: "var(--afghan-blue)",
            display: "inline-block",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HandHeart
            size={22}
            className="text-afghan-gold mr-1"
            aria-label="Get Involved Icon"
          />
          Get Involved, Make a Difference
        </motion.h2>
        <motion.p
          style={{
            margin: "0 auto var(--margin-large) auto",
            color: "var(--afghan-black)",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Users
            size={16}
            className="text-afghan-blue mr-1"
            aria-label="Community Icon"
          />
          Every contribution, big or small, helps us continue our vital work.
          Discover the many ways you can support Afghan Charity Shop.
        </motion.p>
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--margin-large)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {involvementWays.map((way, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={way.image}
                alt={way.alt}
                width={400}
                height={220}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "var(--border-radius) var(--border-radius) 0 0",
                }}
              />
              <div
                style={{
                  padding: "var(--padding-base)",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {involvementIcons[index]}
                  {way.title}
                </h3>
                <p style={{ flexGrow: 1, marginBottom: "var(--padding-base)" }}>
                  {way.description}
                </p>
                <Link
                  href={way.link}
                  className="button button-primary-green button-small flex items-center"
                  style={{ marginTop: "auto" }}
                >
                  {way.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          style={{
            textAlign: "center",
            marginTop: "var(--margin-extra-large)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/donate"
            className="button button-primary-red button-large flex items-center"
          >
            Donate Today
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
                