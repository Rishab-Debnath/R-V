import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 font-mono">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-8">
        {/* Left Section - Logo and About */}
        <div className="space-y-8">
          {/* Logo Image */}
          <img
            src="/images/RV_Logo.png"
            alt="R&V Logo"
            className="h-30 w-auto"
          />

          {/* About Text */}
          <div className="text-sm text-gray-400 space-y-2">
            <p className="uppercase tracking-wide">About</p>
            <p>
              At RV, we transform your vision into reality through clean
              code,
              <br />
              elegant design, and scalable digital solutions.
              <br />
              Founded by Vedant &amp; Rishab — driven by passion, built on
              precision.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="uppercase text-sm text-gray-400 mb-2">Socials</p>
            <div className="flex flex-wrap gap-3">
              {["Facebook", "LinkedIn", "X"].map((platform) => (
                <button
                  key={platform}
                  className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Navigation and Bottom Note */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="uppercase text-sm text-gray-400 mb-4">Navigation</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                to="/about#founders"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Who we are
              </Link>
              <button className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm">
                Services
              </button>
              <Link
                to="/contact"
                className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Footer Note */}
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
