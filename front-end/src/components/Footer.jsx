import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 font-mono">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-8">
        {/* Left Section - Logo and About */}
        <div className="space-y-8">
          <img
            src="/images/Logo 1.png"
            alt="R&V Logo"
            className="h-30 w-auto"
          />

          <div className="text-sm text-gray-400 space-y-2">
            <p className="uppercase tracking-wide">About</p>
            <p>
              At RV Technovate, we transform your vision into reality through
              clean code,
              <br />
              elegant design, and scalable digital solutions.
              <br />
              Founded by Vedant &amp; Rishab — driven by passion, built on
              precision.
            </p>
          </div>

          {[
            { name: "Instagram", url: "https://www.instagram.com/rvtechnovate/" },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/company/rv-technovate/",
            },
            { name: "X", url: "https://x.com/RVTechnovate" },
          ].map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Right Section - Navigation and Bottom Note */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="uppercase text-sm text-gray-400 mb-4">Navigation</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/home"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Who we are
              </Link>
              <Link
                to="/services"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 mt-12 border-t border-white/10 pt-4">
            <div>
              Crafted with care by{" "}
              <span className="text-white font-semibold">R&amp;V</span>
            </div>
            <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
