import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-grow relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 space-y-32">
          {/* Hero Section */}
          <section className="text-center space-y-8 animate-fadeIn">
            <div className="space-y-6">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Two passionate minds, one shared vision. Together, we’re building something meaningful.
              </p>
            </div>
          </section>

          {/* Founders Section */}
          <section className="space-y-32">
            {/* Vedant Ingale */}
            <div className="group">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl group-hover:shadow-white/10 transition-all duration-700">
                      <img
                        src="/api/placeholder/320/320"
                        alt="Vedant Ingale"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 border border-white/20 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-5xl font-light tracking-wide">Vedant</h2>
                      <h3 className="text-5xl font-bold tracking-wide">Ingale</h3>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
                      <p className="text-lg text-gray-400 font-medium tracking-wide">
                        Co-Founder & Full Stack Developer
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                      Vedant is a full-stack developer specializing in frontend development using React.js. With internship experience at Encryptix and successful deployment of real-world projects like a voting system and anti-spoofing interface, he blends clean UI with solid backend logic. He's passionate about building responsive, scalable web applications and mentoring fellow developers.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">React.js</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">MongoDB</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">Node.js</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rishab Debnath */}
            <div className="group">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-gradient-to-l from-white/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl group-hover:shadow-white/10 transition-all duration-700">
                      <img
                        src="images/psp.jpg"
                        alt="Rishab Debnath"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 border border-white/20 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8 text-center lg:text-right">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-5xl font-light tracking-wide">Rishab</h2>
                      <h3 className="text-5xl font-bold tracking-wide">Debnath</h3>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end space-x-4">
                      <p className="text-lg text-gray-400 font-medium tracking-wide">
                        Co-Founder & Technical Architect
                      </p>
                      <div className="w-12 h-px bg-gradient-to-l from-white to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl lg:ml-auto">
                      Rishab is a full-stack developer with hands-on experience in Java, Spring Boot, and database systems. He has developed scalable applications for government and private sector clients, and is currently leading a machine learning-based component recognition system. He's passionate about AI, system design, and ethical tech innovation.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">Spring Boot</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">Full Stack</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">AI & ML</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">System Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Statement */}
          <section className="text-center space-y-12 py-20">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl font-light tracking-wide">
                Our <span className="font-bold">Shared Vision</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Together, we believe in the power of technology to transform businesses and 
                create meaningful impact. Our combined expertise in strategy and technology 
                enables us to deliver solutions that not only meet today's challenges but 
                anticipate tomorrow's opportunities.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default About;