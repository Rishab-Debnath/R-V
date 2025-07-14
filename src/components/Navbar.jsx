import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true); // Scrolling down
      } else {
        setHideNavbar(false); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full h-20 sticky top-0 z-[999] bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-500 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-[1600px] w-full h-full mx-auto flex items-center justify-between px-6 relative">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center z-50 group">
          <div className="relative">
            <img
              src="/images/RV_Logo.png"
              alt="R&V Logo"
              className="h-20 w-auto filter drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
          </div>
        </Link>

        {/* Menu - Center */}
        <ul
          className={`navbar-menu hidden md:flex gap-8 lg:gap-12 xl:gap-16 text-white text-base font-medium absolute left-1/2 transform -translate-x-1/2 transition-all duration-500`}
        >
          <li>
            <Link to="/Home"
              className="relative group px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/About"
              className="relative group px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">Who we are</span>
            </Link>
          </li>
          <li>
            <Link to="/services"
              className="relative group px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group px-6 py-3 text-white transition-all duration-300 hover:text-gray-300 font-medium"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
            </Link>
          </li>
        </ul>

        {/* Hamburger Button - Right (Mobile) */}
        <button
          className={`navbar-toggle md:hidden z-50 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
            menuOpen ? "active" : ""
          }`}
          onClick={toggleNavbar}
        >
          <div className="w-6 h-6 relative flex flex-col justify-center items-center">
            <span
              className={`bar ${menuOpen ? "rotate-45 translate-y-[2px]" : ""}`}
            ></span>
            <span className={`bar ${menuOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`bar ${
                menuOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-full bg-black/50 backdrop-blur-sm transition-all duration-500 z-30 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <ul
            className={`navbar-menu flex flex-col gap-8 text-white text-lg font-medium transition-all duration-500 ${
              menuOpen
                ? "fixed top-0 right-0 w-[280px] h-screen bg-black/90 backdrop-blur-xl border-l border-white/10 p-8 pt-24 z-40 translate-x-0"
                : "fixed top-0 right-0 w-[280px] h-screen bg-black/90 backdrop-blur-xl border-l border-white/10 p-8 pt-24 z-40 translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <li className="border-b border-white/10 pb-4">
              <div className="text-gray-400 text-sm uppercase tracking-wider font-light mb-4">
                Navigation
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-3 group px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-gray-300 transition-colors duration-300"></div>
                <span>Who we are</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 group px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-gray-300 transition-colors duration-300"></div>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 group px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-gray-300 transition-colors duration-300"></div>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-3 group px-4 py-3 text-white transition-all duration-300 hover:text-gray-300 font-medium"
                onClick={() => setMenuOpen(false)} // closes menu on click
              >
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-gray-300 transition-colors duration-300"></div>
                <span>Contact</span>
                <div className="ml-auto w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></div>
              </Link>
            </li>

            <li className="mt-auto pt-8 border-t border-white/10">
              <div className="text-gray-500 text-xs text-center">
                © 2024 R&V. All rights reserved.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Enhanced Toggle Styles */}
      <style jsx>{`
        .navbar-toggle {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .bar {
          display: block;
          width: 20px;
          height: 2px;
          margin: 3px auto;
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .navbar-toggle:hover .bar {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
        }

        .navbar-toggle.active .bar {
          background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
        }

        /* Logo Animations */
        .logo-hover-effect {
          transition: all 0.3s ease;
        }

        .logo-hover-effect:hover {
          transform: scale(1.05);
          filter: brightness(1.1)
            drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1));
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
