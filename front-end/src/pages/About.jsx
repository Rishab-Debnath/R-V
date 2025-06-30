import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  // Project slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample project images - replace with your actual project screenshots
  const projects = [
    {
      id: 1,
      image: "images/Img1.png",
      title: "E-Commerce Platform",
      description: "Full-stack web application"
    },
    {
      id: 2,
      image: "images/Img2.png", 
      title: "Voting System",
      description: "Secure digital voting platform"
    },
    {
      id: 3,
      image: "images/Img3.png",
      title: "Anti-Spoofing Interface",
      description: "AI-powered security system"
    },
    {
      id: 4,
      image: "images/Img4.png",
      title: "Component Recognition",
      description: "ML-based recognition system"
    },
    {
      id: 5,
      image: "images/Img5.png",
      title: "Business Analytics",
      description: "Data visualization dashboard"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col overflow-hidden relative">
      {/* Glass Room Background */}
      <div className="fixed inset-0 z-0">
        {/* Multiple glass panels */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.01] to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.01] via-transparent to-white/[0.02]"></div>
        
        {/* Glass grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>

        {/* Floating glass particles */}
        <div className="absolute inset-0">
          <div className="glass-particle glass-particle-1"></div>
          <div className="glass-particle glass-particle-2"></div>
          <div className="glass-particle glass-particle-3"></div>
          <div className="glass-particle glass-particle-4"></div>
          <div className="glass-particle glass-particle-5"></div>
        </div>
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20 space-y-40">
          {/* Hero Section */}
          <section className="text-center space-y-8 glass-fade-in">
            <div className="space-y-6">
              {/* Glass divider */}
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></div>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed glass-text">
                Two passionate minds, one shared vision. Together, we're building something meaningful.
              </p>
            </div>
          </section>

          {/* Founders Section */}
          <section className="space-y-32">
            {/* Vedant Ingale */}
            <div className="group glass-section">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  {/* Glass reflection effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 glass-glow"></div>
                  
                  <div className="relative">
                    {/* Main glass frame */}
                    <div className="glass-frame w-80 h-80 rounded-3xl overflow-hidden group-hover:shadow-white/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                      <div className="absolute inset-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                        <img
                          src="images/vdi.jpg"
                          alt="Vedant Ingale"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    

                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-5xl font-light tracking-wide glass-text-shimmer">Vedant</h2>
                      <h3 className="text-5xl font-bold tracking-wide glass-text-shimmer">Ingale</h3>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-white/40 to-transparent relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur-sm"></div>
                      </div>
                      <p className="text-lg text-gray-300 font-medium tracking-wide">
                        Co-Founder & Full Stack Developer
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-text-container">
                      <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                        Vedant is a full-stack developer specializing in frontend development using React.js. With internship experience at Encryptix and successful deployment of real-world projects like a voting system and anti-spoofing interface, he blends clean UI with solid backend logic. He's passionate about building responsive, scalable web applications and mentoring fellow developers.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <span className="glass-tag">React.js</span>
                      <span className="glass-tag">MongoDB</span>
                      <span className="glass-tag">Node.js</span>
                      <span className="glass-tag">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rishab Debnath */}
            <div className="group glass-section">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  {/* Glass reflection effect */}
                  <div className="absolute -inset-6 bg-gradient-to-l from-white/5 via-white/10 to-white/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 glass-glow"></div>
                  
                  <div className="relative">
                    {/* Main glass frame */}
                    <div className="glass-frame w-80 h-80 rounded-3xl overflow-hidden group-hover:shadow-white/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                      <div className="absolute inset-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                        <img
                          src="images/psp.jpg"
                          alt="Rishab Debnath"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    

                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8 text-center lg:text-right">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-5xl font-light tracking-wide glass-text-shimmer">Rishab</h2>
                      <h3 className="text-5xl font-bold tracking-wide glass-text-shimmer">Debnath</h3>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end space-x-4">
                      <p className="text-lg text-gray-300 font-medium tracking-wide">
                        Co-Founder & Technical Architect
                      </p>
                      <div className="w-12 h-[2px] bg-gradient-to-l from-white/40 to-transparent relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent blur-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-text-container">
                      <p className="text-lg text-gray-200 leading-relaxed max-w-2xl lg:ml-auto">
                        Rishab is a full-stack developer with hands-on experience in Java, Spring Boot, and database systems. He has developed scalable applications for government and private sector clients, and is currently leading a machine learning-based component recognition system. He's passionate about AI, system design, and ethical tech innovation.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      <span className="glass-tag">Spring Boot</span>
                      <span className="glass-tag">Full Stack</span>
                      <span className="glass-tag">AI & ML</span>
                      <span className="glass-tag">System Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Project Showcase Slider */}
          <section className="py-20">
            <div className="text-center space-y-12 mb-16 glass-fade-in">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed glass-text">
                  Showcasing our latest work and innovations that drive business transformation
                </p>
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full overflow-hidden">
              {/* Main Slider */}
              <div className="relative h-96 md:h-[500px] flex items-center justify-center">
                <div className="relative w-full max-w-6xl mx-auto px-4">
                  <div className="flex items-center justify-center space-x-4 md:space-x-8">
                    {/* Previous Image (Left) */}
                    <div className="relative group cursor-pointer opacity-40 hover:opacity-60 transition-all duration-500">
                      <div className="glass-slide-frame w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden">
                        <img
                          src={projects[(currentSlide - 1 + projects.length) % projects.length].image}
                          alt="Previous project"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Current Image (Center) */}
                    <div className="relative group cursor-pointer">
                      <div className="absolute -inset-6 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-2xl blur-2xl opacity-60 glass-glow-strong"></div>
                      <div className="relative glass-main-slide w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                        <div className="absolute inset-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm">
                          <img
                            src={projects[currentSlide].image}
                            alt={projects[currentSlide].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-center glass-overlay">
                            <h3 className="text-xl font-bold mb-2 glass-text-shimmer">{projects[currentSlide].title}</h3>
                            <p className="text-gray-200 text-sm">{projects[currentSlide].description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Image (Right) */}
                    <div className="relative group cursor-pointer opacity-40 hover:opacity-60 transition-all duration-500">
                      <div className="glass-slide-frame w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden">
                        <img
                          src={projects[(currentSlide + 1) % projects.length].image}
                          alt="Next project"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-nav-button group"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white transform group-hover:-translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-nav-button group"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`glass-indicator ${
                      index === currentSlide ? 'active' : ''
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 max-w-md mx-auto">
                <div className="h-[2px] glass-progress-track rounded-full overflow-hidden">
                  <div 
                    className="h-full glass-progress-bar transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        /* Glass morphism effects */
        .glass-frame {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .glass-slide-frame {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .glass-main-slide {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 
            0 25px 50px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .glass-ring {
          border: 2px solid rgba(255,255,255,0.15);
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          backdrop-filter: blur(5px);
          border-radius: 50%;
        }

        .glass-orb {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .glass-tag {
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .glass-tag:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .glass-nav-button {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .glass-nav-button:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .glass-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .glass-indicator.active {
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%);
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }

        .glass-indicator:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%);
          transform: scale(1.1);
        }

        .glass-progress-track {
          background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .glass-progress-bar {
          background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%);
          box-shadow: 0 0 20px rgba(255,255,255,0.2);
        }

        .glass-text-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%);
          backdrop-filter: blur(2px);
          border-radius: 12px;
          padding: 1rem;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .glass-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
          backdrop-filter: blur(10px);
        }

        /* Floating glass particles */
        .glass-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          backdrop-filter: blur(2px);
          animation: float 20s infinite ease-in-out;
        }

        .glass-particle-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .glass-particle-2 {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 10%;
          animation-delay: -5s;
        }

        .glass-particle-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 15%;
          animation-delay: -10s;
        }

        .glass-particle-4 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 5%;
          animation-delay: -15s;
        }

        .glass-particle-5 {
          width: 40px;
          height: 40px;
          bottom: 10%;
          right: 30%;
          animation-delay: -8s;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.1; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.4; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.2; }
        }

        @keyframes glass-fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
            backdrop-filter: blur(10px);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .glass-fade-in {
          animation: glass-fade-in 1s ease-out;
        }

        .glass-section {
          animation: glass-fade-in 1s ease-out;
        }

        .glass-text {
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
        }

        .glass-text-shimmer {
          background: linear-gradient(90deg, #ffffff 25%, rgba(255,255,255,0.8) 50%, #ffffff 75%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .glass-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .glass-glow-strong {
          animation: glow-strong 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.5; }
          to { opacity: 0.8; }
        }

        @keyframes glow-strong {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }

        /* Hover effects */
        .group:hover .glass-glow {
          animation: glow-strong 1s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default About;