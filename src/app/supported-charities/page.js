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

const charitySections = [
  {
    title: "Education and Skills Development",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Education and Skills Development",
    description:
      "Literacy programs, vocational training, and entrepreneurial development opportunities.",
    direction: "row",
  },
  {
    title: "Healthcare",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Healthcare",
    description:
      "Public health awareness initiatives and essential health services, improve maternal and child health, deliver psychosocial support, and raise awareness about hygiene and disease prevention.",
    direction: "row-reverse",
  },
  {
    title: "Livelihoods and Economic Empowerment",
    image:
      "https://images.pexels.com/photos/27155524/pexels-photo-27155524/free-photo-of-farmers-walking-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Livelihoods and Economic Empowerment",
    description:
      "SME development, vocational training, capacity-building, and agricultural initiatives to drive economic growth.",
    direction: "row",
  },
  {
    title: "Emergency and Humanitarian Assistance",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Emergency and Humanitarian Assistance",
    description:
      "Immediate relief including cash, food, shelter, medical aid as well as long-term assistance to displaced and conflict-affected populations.",
    direction: "row-reverse",
  },
  {
    title: "Community Development, Peacebuilding, and Good Governance",
    image:
      "https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Community Development, Peacebuilding, and Good Governance",
    description:
      "Social cohesion, foster local leadership and political participation, and build resilient communities.",
    direction: "row",
  },
  {
    title: "Agriculture and Food Security",
    image:
      "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Agriculture and Food Security",
    description:
      "Promote sustainable farming practices and ensure access to resources for rural communities.",
    direction: "row-reverse",
  },
  {
    title: "Water, Sanitation, and Hygiene (WASH)",
    image:
      "https://images.pexels.com/photos/9749/hands-water-poor-poverty.jpg?auto=compress&cs=tinysrgb&w=800",
    alt: "Water, Sanitation, and Hygiene (WASH)",
    description:
      "We improve access to clean water and sanitation facilities, alongside community-driven hygiene education.",
    direction: "row",
  },
  {
    title: "Human Rights (Gender Justice and GBV Prevention)",
    image:
      "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Human Rights (Gender Justice and GBV Prevention)",
    description:
      "We promote human rights, women's rights, and child rights through advocacy, campaigning, targeted interventions, and access to opportunities.",
    direction: "row-reverse",
  },
];

export default function SupportedCharitiesPage() {
  return (
    <>
      <head>
        <title>Supported Charities | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Discover the charities and projects supported by Afghan Charity Shop. Learn how your contributions make a difference in Afghan and South Asian communities."
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
              className="text-5xl md:text-6xl font-bold mb-6 text-afghan-white"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                border: "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Our Supported Charities
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mx-auto text-afghan-white"
              style={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              More than a Retail Shop. Doing our part to offer hope to a hurting
              world.
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12 md:mb-16 flex flex-col items-center"
              variants={fadeIn}
            >
              <h2
                style={{ width: "100%" }}
                className="text-3xl md:text-4xl font-bold text-afghan-blue mb-4 text-center"
              >
                Who We Support
              </h2>
              <div className="w-full flex flex-col items-center">
                <Image
                  src="https://images.pexels.com/photos/3651632/pexels-photo-3651632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Charity support in Afghanistan"
                  width={700}
                  height={350}
                  className="rounded-lg shadow-md mb-6 object-cover w-full max-w-2xl"
                  priority={false}
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                ACS supports charities in Afghanistan that provide education,
                healthcare, and relief of poverty for those most at risk. They
                include:
              </p>
            </motion.div>

            <motion.div className="mt-8" variants={fadeIn}>
              <div className="flex flex-col items-center mb-6 pb-4 border-b border-gray-200">
                <Image
                  src="https://acaa.org.uk/wp-content/uploads/2023/06/acaa-logo.png"
                  alt="Afghanistan and Central Asian Association Logo"
                  width={100}
                  height={100}
                  className="rounded-md mr-0 sm:mr-6 mb-4 sm:mb-0 object-contain"
                />
                <h3 className="text-2xl md:text-3xl font-semibold text-afghan-blue text-center sm:text-left">
                  Afghanistan and Central Asian Association
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  The Afghanistan and Central Asian Association (ACAA) is a
                  registered charity that works to improve the lives of Afghan
                  and Central Asian communities in the UK.
                </p>
              </div>

              <div className="space-y-8">
                {charitySections.map((section, idx) => (
                  <div
                    key={section.title}
                    className={`flex flex-col md:flex-${
                      section.direction
                    } items-center gap-6 md:gap-8 py-6 border-b border-gray-200 ${
                      idx === charitySections.length - 1
                        ? "last:border-b-0"
                        : ""
                    }`}
                  >
                    <div className="md:w-1/3 w-full flex-shrink-0">
                      <Image
                        src={section.image}
                        alt={section.alt}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl lg:text-2xl font-semibold text-afghan-green mb-2">
                        {section.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-16 text-center" variants={fadeIn}>
              <Link
                href="/donate"
                className="button button-primary-red button-large"
              >
                Support Our Partners
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
