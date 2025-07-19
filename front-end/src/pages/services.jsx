import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../assets/services-banner.jpg"; // Add your banner image in assets

const services = [
  {
    title: "Web Development",
    description: "Modern websites that are fast, secure and responsive.",
    path: "/services/web-development",
  },
  {
    title: "App Development",
    description: "Cross-platform apps tailored to your business needs.",
    path: "/services/app-development",
  },
  {
    title: "AI / ML Solutions",
    description: "Intelligent systems powered by machine learning.",
    path: "/services/ai-ml",
  },
  {
    title: "Cybersecurity",
    description: "Protect your data with our top-notch security solutions.",
    path: "/services/cybersecurity",
  },
  {
    title: "Photo Editing",
    description: "Professional-grade photo editing services.",
    path: "/services/photo-editing",
  },
  {
    title: "Video Editing",
    description: "Engaging video content with expert editing.",
    path: "/services/video-editing",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Image Section */}
      <div
        className="w-full h-[600px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Every Client is a Visionary — <br className="hidden md:block" />
          We Just Make It Real
        </motion.h1>
      </div>

      {/* Our Services Heading */}
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg md:text-xl italic text-gray-300 max-w-2xl mx-auto">
          "We turn your ideas into digital reality. Let's build the future
          together."
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/10 hover:bg-white/20 p-6 rounded-2xl transition duration-300 border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA below cards, touches footer */}
      <section className="text-center px-4 py-15 bg-black/5  border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-4"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-black-300 text-md md:text-lg mb-6"
        >
          Reach out today — let’s make your vision a reality.
        </motion.p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
