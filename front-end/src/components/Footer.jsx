function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 font-mono">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-8">

        {/* Left Section - Logo and About */}
        <div className="space-y-8">
          {/* Logo Image */}
          <img src="/images/RV_Logo.png" alt="R&V Logo" className="h-30 w-auto" />

          {/* About Text */}
          <div className="text-sm text-gray-400 space-y-2">
            <p className="uppercase tracking-wide">About</p>
            <p>
              At R&V, we bring your ideas to life with clean code,<br />
              sleek design, and scalable web solutions.<br />
              Rishab & Vedant — turning passion into projects.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="uppercase text-sm text-gray-400 mb-2">Socials</p>
            <div className="flex flex-wrap gap-3">
              {['Facebook', 'LinkedIn', 'X'].map((platform) => (
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
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-white px-4 py-1 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-12 border-t border-white/10 pt-4">
            <div>Created by <span className="text-white font-semibold">R&V</span></div>
            <div>All rights reserved © {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
