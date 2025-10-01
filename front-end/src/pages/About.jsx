import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const sections = [
  {
    id: "mission",
    video: "/videos/video1.mp4",
    content:
      "To be the technological partner of choice, solving real-world problems with elegant, scalable solutions that transform businesses and empower innovation.",
  },
  {
    id: "what",
    video: "/videos/video2.mp4",
    content:
      "We enable smart transformation by delivering intelligent systems—ranging from ML-powered automation to full-stack digital platforms that drive measurable results.",
  },
  {
    id: "value",
    video: "/videos/video3.mp4",
    content:
      "Our projects bring together performance, ethics, and impact. We believe in writing clean code, building resilient systems, and creating solutions that stand the test of time.",
  },
  {
    id: "founders",
    video: "/videos/video10.mp4",
    content: null,
  },
];

// Sample projects data
const projects = [
  {
    id: 1,
    image: "/images/Img1.png",
  },
  {
    id: 2,
    image: "/images/Img2.png",
  },
  {
    id: 3,
    image: "/images/Img3.png",
  },
  {
    id: 4,
    image: "/images/Img4.png",
  },
  {
    id: 5,
    image: "/images/Img5.png",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sectionTransitions, setSectionTransitions] = useState(
    new Array(sections.length).fill(0)
  );
  const videoRefs = useRef([]);

  const location = useLocation(); // <-- ADD THIS

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]); // <-- ADD THIS EFFECT

  // Project slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Video management and scroll handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const totalSections = sections.length;

      setScrollY(scrollTop);

      // Calculate active section
      const currentSectionIndex = Math.floor(scrollTop / sectionHeight);
      setActiveSection(Math.min(currentSectionIndex, totalSections - 1));

      // Calculate transition opacity for each section
      const newTransitions = sections.map((_, index) => {
        const sectionStart = index * sectionHeight;
        const sectionEnd = (index + 1) * sectionHeight;
        const fadeZone = sectionHeight * 0.15; // 15% fade zone

        // Fade out at the end of each section
        if (scrollTop >= sectionEnd - fadeZone && scrollTop < sectionEnd) {
          return (scrollTop - (sectionEnd - fadeZone)) / fadeZone;
        }
        // Fade in at the beginning of each section
        else if (
          scrollTop >= sectionStart &&
          scrollTop < sectionStart + fadeZone
        ) {
          return 1 - (scrollTop - sectionStart) / fadeZone;
        }
        return 0;
      });

      setSectionTransitions(newTransitions);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous video playback
  useEffect(() => {
    const manageVideos = () => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          // Ensure all videos are always playing and looping
          if (video.paused) {
            video.play().catch(() => {});
          }

          // Handle video end to create seamless loop
          const handleVideoEnd = () => {
            video.currentTime = 0;
            video.play().catch(() => {});
          };

          video.addEventListener("ended", handleVideoEnd);

          // Clean up event listener
          return () => video.removeEventListener("ended", handleVideoEnd);
        }
      });
    };

    // Start video management
    const interval = setInterval(manageVideos, 100);
    return () => clearInterval(interval);
  }, []);

  // Initialize videos on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  return (
    <div
      className="bg-black text-white h-screen overflow-y-scroll overflow-x-hidden"
      ref={containerRef}
    >
      <Navbar />

      {/* Enhanced Professional CSS with Animations */}
      <style jsx>{`
        .neon-text {
          color: #fff !important;
          font-family: 'Poppins', 'Segoe UI', 'Arial', sans-serif;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .neon-paragraph {
          color: #d1d5db;
          font-family: 'Poppins', 'Segoe UI', 'Arial', sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        /* Professional Color Palette */
        :root {
          --primary-white: #ffffff;
          --soft-white: #f8fafc;
          --light-gray: #e2e8f0;
          --medium-gray: #64748b;
          --dark-gray: #1e293b;
          --pure-black: #000000;
          --accent-silver: #94a3b8;
          --glass-white: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        /* Enhanced Typography Animation */
        .animated-text {
          opacity: 0;
          animation: textReveal 1.5s ease-out forwards;
        }

        .animated-text.delay-1 {
          animation-delay: 0.2s;
        }
        .animated-text.delay-2 {
          animation-delay: 0.4s;
        }
        .animated-text.delay-3 {
          animation-delay: 0.6s;
        }
        .animated-text.delay-4 {
          animation-delay: 0.8s;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            filter: blur(10px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(10px) scale(0.95);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Advanced Text Effects */
        .text-shimmer-professional {
          background: linear-gradient(
            135deg,
            var(--primary-white) 0%,
            var(--light-gray) 20%,
            var(--primary-white) 40%,
            var(--soft-white) 60%,
            var(--primary-white) 80%,
            var(--light-gray) 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShimmer 6s ease-in-out infinite;
        }

        @keyframes textShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .text-typewriter {
          overflow: hidden;
          border-right: 2px solid var(--primary-white);
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: var(--primary-white);
          }
        }

        /* Enhanced Glass Morphism Effects */
        .glass-card-professional {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.08),
            inset 0 -2px 0 rgba(255, 255, 255, 0.03);
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
        }

        .glass-card-professional::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            transparent 50%,
            rgba(255, 255, 255, 0.04) 100%
          );
          opacity: 0;
          transition: opacity 0.8s ease;
          border-radius: inherit;
        }

        .glass-card-professional:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5),
            0 10px 30px rgba(0, 0, 0, 0.4),
            inset 0 2px 0 rgba(255, 255, 255, 0.12),
            inset 0 -2px 0 rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .glass-card-professional:hover::before {
          opacity: 1;
        }

        /* Enhanced Founder Cards */
        .founder-card-enhanced {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0.02) 100%
          );
          backdrop-filter: blur(30px);
          border: 0.5px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.5),
            0 6px 20px rgba(0, 0, 0, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }

        .founder-card-enhanced::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 30%,
            rgba(255, 255, 255, 0.03) 70%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.9s ease;
          border-radius: inherit;
        }

        .founder-card-enhanced::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transition: left 0.9s ease;
        }

        .founder-card-enhanced:hover {
          transform: translateY(-20px) scale(1.03);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6),
            0 15px 40px rgba(0, 0, 0, 0.4),
            inset 0 3px 0 rgba(255, 255, 255, 0.15),
            inset 0 -2px 0 rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .founder-card-enhanced:hover::before {
          opacity: 1;
        }

        .founder-card-enhanced:hover::after {
          left: 100%;
        }

        /* Professional Image Effects */
        .founder-image-professional {
          transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
          filter: grayscale(0.4) contrast(1.15) brightness(0.95) saturate(0.8);
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .founder-image-professional::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 1s ease;
          border-radius: inherit;
        }

        .founder-card-enhanced:hover .founder-image-professional {
          transform: scale(1.08) rotate(1deg);
          filter: grayscale(0) contrast(1.25) brightness(1.05) saturate(1.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5),
            0 8px 25px rgba(0, 0, 0, 0.4),
            inset 0 2px 0 rgba(255, 255, 255, 0.15);
        }

        .founder-card-enhanced:hover .founder-image-professional::before {
          opacity: 1;
        }

        /* Professional Accent Lines */
        .accent-line-professional {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 10%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.6) 70%,
            rgba(255, 255, 255, 0.2) 90%,
            transparent 100%
          );
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3),
            0 1px 0 rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.1);
          animation: lineGlow 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .accent-line-professional::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: lineSweep 3s ease-in-out infinite;
        }

        .animated-line {
          animation: lineGlow 4s ease-in-out infinite,
            linePulse 2s ease-in-out infinite;
        }

        @keyframes lineGlow {
          0%,
          100% {
            opacity: 0.7;
            transform: scaleX(0.95);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.05);
          }
        }

        @keyframes lineSweep {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes linePulse {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }

        /* Enhanced Content Animations */
        .content-slide-in {
          opacity: 0;
          transform: translateX(-100px);
          animation: slideIn 1.2s ease-out forwards;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .content-fade-up {
          opacity: 0;
          transform: translateY(60px);
          animation: fadeUp 1.5s ease-out forwards;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Professional Gradient Overlays */
        .gradient-overlay-professional {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.3) 25%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.3) 75%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        /* Enhanced Section Numbering */
        .section-number {
          position: relative;
          font-family: "Courier New", monospace;
          font-weight: 300;
          letter-spacing: 0.3em;
          opacity: 0;
          animation: numberAppear 1s ease-out 0.5s forwards;
        }

        @keyframes numberAppear {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Subtle Hover Effects */
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .hover-lift:hover {
          transform: translateY(-2px);
        }

        /* Professional Text Shadows */
        .text-shadow-professional {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.2);
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .text-shimmer-professional {
            font-size: 3rem;
          }

          .animated-text {
            font-size: 1.1rem;
          }
        }

        /* Professional Loading States */
        .loading-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: loadingShimmer 2s ease-in-out infinite;
        }

        @keyframes loadingShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Enhanced Video Container */
        .video-container-professional {
          position: relative;
          overflow: hidden;
        }

        .video-container-professional::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.01) 50%,
            transparent 100%
          );
          pointer-events: none;
          animation: videoOverlay 8s ease-in-out infinite;
        }

        @keyframes videoOverlay {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Main content */}
      <div className="relative">
        {sections.map((sec, i) => (
          <section
            key={sec.id}
            className="min-h-screen w-full flex items-center justify-center relative video-container-professional"
          >
            {/* Video Background */}
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={sec.video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
            />

            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 gradient-overlay-professional z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl px-8 w-full">
              {sec.content ? (
                /* Regular content sections */
                <div className="content-fade-up">
                  <div className="mb-8">
                    <div className="flex items-center mb-8">
                      <div className="w-24 h-0.5 accent-line-professional mr-8 hover-lift animated-line"></div>
                      <span className="section-number text-white text-sm font-light uppercase tracking-[0.3em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h1
                      className={`text-6xl md:text-8xl font-bold mb-10 leading-tight animated-text ${
                        sec.id !== "founders"
                          ? "neon-text"
                          : "text-shimmer-professional"
                      }`}
                    >
                      {sec.title}
                    </h1>
                  </div>

                  <div className="max-w-4xl content-slide-in">
                    <p className="text-xl md:text-2xl neon-text leading-relaxed mb-10 font-light animated-text delay-2">
                      <span className="neon-paragraph">{sec.content}</span>
                    </p>
                    <div className="w-48 h-0.5 accent-line-professional animated-text delay-3 animated-line"></div>
                  </div>
                </div>
              ) : (
                /* Founders section with enhanced smaller cards */
                <div className="content-fade-up w-full">
                  <div className="mb-8">
                    <div className="flex items-center mb-8 justify-center">
                      <div className="w-24 h-0.5 accent-line-professional mr-8 hover-lift animated-line"></div>
                      <span className="section-number text-white text-sm font-light uppercase tracking-[0.3em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-24 h-0.5 accent-line-professional ml-8 hover-lift animated-line"></div>
                    </div>
                    <h1
                      className={`text-6xl md:text-8xl font-bold mb-10 leading-tight animated-text text-shadow-professional ${
                        sec.id !== "founders"
                          ? "neon-text"
                          : "text-shimmer-professional"
                      }`}
                    >
                      {sec.title}
                    </h1>
                  </div>

                  {/* Enhanced Professional Founders Cards with Neon Effects */}
                  <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
                    {/* Vedant Card - Enhanced Professional */}
                    <div className="group relative">
                      {/* Main card */}
                      <div className="relative bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-500 min-h-[480px] flex flex-col justify-center overflow-hidden">
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center h-full flex flex-col justify-between">
                          <div className="relative inline-block mb-6 mx-auto">
                            <img
                              src="images/vdi.jpg"
                              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover"
                              alt="Vedant Ingale"
                            />
                          </div>

                          <div className="space-y-4 flex-1 flex flex-col justify-center">
                            {/* Animated line */}
                            <div className="relative w-16 h-0.5 mx-auto overflow-hidden">
                              <div className="absolute inset-0 bg-white opacity-60"></div>
                            </div>

                            <span className="text-gray-300 text-xs font-light uppercase tracking-[0.25em] block">
                              Co-Founder
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-white transition-all duration-500" style={{textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)'}}>
                              <span style={{
                                textShadow: '0 0 12px #fff, 0 0 24px #00eaff, 0 0 36px #00eaff',
                                color: '#fff',
                                fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
                                letterSpacing: '0.04em',
                                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                              }}>Vedant Ingale</span>
                            </h2>

                            <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
                              Vedant Ingale is a passionate full-stack web
                              developer crafting sleek, user-friendly websites
                              that bring ideas to life with precision
                              and creativity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rishab Card - Enhanced Professional */}
                    <div className="group relative">
                      {/* Main card */}
                      <div className="relative bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-500 min-h-[480px] flex flex-col justify-center overflow-hidden">
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center h-full flex flex-col justify-between">
                          <div className="relative inline-block mb-6 mx-auto">
                            <img
                              src="images/psp.jpg"
                              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover"
                              alt="Rishab Debnath"
                            />
                          </div>

                          <div className="space-y-4 flex-1 flex flex-col justify-center">
                            {/* Animated line */}
                            <div className="relative w-16 h-0.5 mx-auto overflow-hidden">
                              <div className="absolute inset-0 bg-white opacity-60"></div>
                            </div>

                            <span className="text-gray-300 text-xs font-light uppercase tracking-[0.25em] block">
                              Co-Founder
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-white transition-all duration-500" style={{textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)'}}>
                              <span style={{
                                textShadow: '0 0 12px #fff, 0 0 24px #00eaff, 0 0 36px #00eaff',
                                color: '#fff',
                                fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
                                letterSpacing: '0.04em',
                                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                              }}>Rishab Debnath</span>
                            </h2>

                            <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
                              Rishab is a full-stack developer focused on
                              building clean, scalable digital solutions. He
                              blends smart design with technology to create
                              simple, effective user experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
        {/* Enhanced Professional Project Showcase Section */}
        <section className="w-full py-20 px-8 bg-gradient-to-br from-black-950 via-black to-gray-950 text-white relative overflow-hidden project-section-fade">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-8 mb-20">
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Discover our latest innovations and transformative solutions
                that drive business success
              </p>
            </div>

            {/* Main Slider Container */}
            <div className="relative">
              {/* Slider Wrapper */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Slide Navigation */}
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20">
                  <button
                    onClick={prevSlide}
                    className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transform group-hover:-translate-x-0.5 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transform group-hover:translate-x-0.5 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Slides Container */}
                <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 w-full max-w-6xl mx-auto px-4">
                  {/* Previous Slide */}
                  <div className="hidden md:block relative group cursor-pointer opacity-30 hover:opacity-50 transition-all duration-500">
                    <div className="w-56 h-36 lg:w-72 lg:h-44 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                      <img
                        src={
                          projects[
                            (currentSlide - 1 + projects.length) %
                              projects.length
                          ].image
                        }
                        alt="Previous project"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Current Slide */}
                  <div className="relative group cursor-pointer">
                    {/* Glow Effect */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                    {/* Main Card */}
                    <div className="relative w-80 h-52 md:w-96 md:h-64 lg:w-[480px] lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-700 shadow-2xl">
                      {/* Image */}
                      <img
                        src={projects[currentSlide].image}
                        alt={projects[currentSlide].title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <div className="space-y-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-white">
                            {projects[currentSlide].title}
                          </h3>
                          <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                            {projects[currentSlide].description}
                          </p>

                          {/* Category Badge */}
                          <div className="flex items-center space-x-2 pt-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                              {projects[currentSlide].category || "Featured"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    </div>
                  </div>

                  {/* Next Slide */}
                  <div className="hidden md:block relative group cursor-pointer opacity-30 hover:opacity-50 transition-all duration-500">
                    <div className="w-56 h-36 lg:w-72 lg:h-44 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                      <img
                        src={
                          projects[(currentSlide + 1) % projects.length].image
                        }
                        alt="Next project"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-12 space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-8 max-w-md mx-auto">
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 rounded-full"
                    style={{
                      width: `${((currentSlide + 1) / projects.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>Project {currentSlide + 1}</span>
                  <span>of {projects.length}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
