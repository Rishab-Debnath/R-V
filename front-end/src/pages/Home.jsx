import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bg.jpg";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


// Import your images
import web from "../assets/img_01.jpg";
import app from "../assets/img_02.jpg";
import ai from "../assets/img_03.jpg";
import cyber from "../assets/img_04.jpg";
import photo from "../assets/img_05.jpg";
import video from "../assets/img_06.jpg";

const services = [
  { title: "Web Development", img: web },
  { title: "App Development", img: app },
  { title: "AI / ML Solutions", img: ai },
  { title: "Cybersecurity", img: cyber },
  { title: "Photo Editing", img: photo },
  { title: "Video Editing", img: video },
];

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-80 min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />

          {/* Hero Section with Animation */}
         
<section
  className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content over image */}
  <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
    >
      Build. Launch. Scale.{" "}
      <span className="text-blue-400">With R&V.</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="mt-4 text-lg md:text-xl text-gray-50"
    >
      We help startups and businesses transform bold ideas into world-class digital products.
    </motion.p>
  </div>
</section>


          {/* Creative Business Section */}
          <section className="text-white mt-20 px-4 max-w-6xl mx-auto">
            {/* Heading and Navigation Controls */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Creative Business
              </h2>

              <div className="flex gap-2">
                <div className="swiper-button-prev !text-white !static"></div>
                <div className="swiper-button-next !text-white !static"></div>
              </div>
            </div>

            {/* Swiper Container */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="relative"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="group relative rounded-2xl h-[300px] overflow-hidden border border-white/20"
                >
                  {/* Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                      {service.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
