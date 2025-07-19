import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const Submit = (e) => {
    e.preventDefault();
    const formEle = formRef.current;
    const formDatab = new FormData(formEle);

    setLoading(true);
    setStatus(null);

    fetch(
      "https://script.google.com/macros/s/AKfycbzoXbg4dPWgroSHUnULW532fpGbmIJbHEbMnq3GWrGEMFrpJOHwguwQtLwPIHaf_A8XJA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        setLoading(false);
        setStatus("success");
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <div className="bg-black min-h-screen flex flex-col text-white relative overflow-x-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/Background2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-grow relative w-full max-w-7xl mx-auto px-6 py-16 z-10">
          {/* Header Section */}
          <header className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M3 6h18M3 14h18M3 18h18"
                />
              </svg>
              Request for Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl">
              We've driven growth and purposeful transformation across every
              industry and we're excited to build on your belief. Tell us a bit
              more about yourself, so we can get the ball rolling.
            </p>
          </header>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={Submit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Name Fields */}
            <div className="relative">
              <input
                type="text"
                name="First name"
                placeholder="First name*"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="LastName"
                placeholder="Last name*"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>

            {/* Contact Information */}
            <div className="relative">
              <input
                type="email"
                name="Email"
                placeholder="Email*"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="Organization"
                placeholder="Organization*"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>

            {/* Location Fields */}
            <div className="relative">
              <input
                type="text"
                name="State"
                placeholder="State"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="Country"
                placeholder="Country"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
            </div>

            {/* Preferred Contact Method and Phone */}
            <div className="relative">
              <select
                name="PreferredContact"
                className="w-full p-4 bg-black border-0 border-b-2 border-gray-600 rounded-none text-white focus:outline-none focus:border-blue-400 transition-all duration-300 appearance-none"
                required
              >
                <option value="" className="bg-black text-white">
                  Preferred Contact Method*
                </option>
                <option value="Email" className="bg-black text-white">
                  Email
                </option>
                <option value="WhatsApp" className="bg-black text-white">
                  WhatsApp
                </option>
                <option value="Phone Call" className="bg-black text-white">
                  Phone Call
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="tel"
                name="MobileNumber"
                placeholder="Mobile Number"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="relative md:col-span-2 mt-4">
              <textarea
                name="Message"
                placeholder="How can we help you?*"
                className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none h-32 resize-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`px-12 py-4 border-2 font-medium uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${
                  loading
                    ? "bg-blue-400 text-black cursor-not-allowed"
                    : "bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-blue-400"
                }
              `}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>

          {/* Enhanced Professional Feedback Messages */}
          {status === "success" && (
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      Thank You for Your Interest
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Your service request has been successfully submitted. We
                      appreciate you taking the time to reach out to us.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Expected response time: 24-48 hours</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          A team member will contact you via your preferred
                          method
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">
                      Submission Temporarily Unavailable
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      We're experiencing a temporary issue with our submission
                      system. Please try again in a few moments.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <span>Please refresh and try submitting again</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          Alternatively, you can email us directly for immediate
                          assistance
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
