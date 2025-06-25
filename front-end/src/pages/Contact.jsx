import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = formRef.current;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = formRef.current;

  //   const formData = new FormData();

  //   formData.append("entry.1423546002", form[0].value); // First name
  //   formData.append("entry.1287945899", form[1].value); // Last name
  //   formData.append("entry.1665762325", form[2].value); // Email
  //   formData.append("entry.249167018", form[3].value); // Organization
  //   formData.append("entry.1007177469", form[4].value); // State
  //   formData.append("entry.2074523407", form[5].value); // Country
  //   formData.append("entry.1025850217", form[6].value); // Preferred contact
  //   formData.append("entry.1986778931", form[7].value); // Mobile Number
  //   formData.append("entry.759342864", form[8].value); // Message

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzXhrJrb4JUGspomXh2S7dZrjwAbzLcMlalMTY0Zry0gGzP-niYUZ1joBHyCsS0bLpd/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            firstName: form[0].value,
            lastName: form[1].value,
            email: form[2].value,
            organization: form[3].value,
            state: form[4].value,
            country: form[5].value,
            preferredContact: form[6].value,
            mobile: form[7].value,
            message: form[8].value,
          }).toString(),
        }
      );

      alert("Submitted successfully!");
      form.reset();
    } catch (error) {
      alert("Submission failed.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-16">
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
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Name Fields */}
          <div className="relative">
            <input
              type="text"
              placeholder="First name*"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Last name*"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Contact Information */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Organization*"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Location Fields */}
          <div className="relative">
            <input
              type="text"
              placeholder="State"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Country"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Preferred Contact Method and Phone */}
          <div className="relative">
            <select className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none text-white focus:outline-none focus:border-blue-400 transition-all duration-300 appearance-none">
              <option value="" className="bg-black">
                Preferred Contact Method*
              </option>
              <option value="email" className="bg-black">
                Email
              </option>
              <option value="whatsapp" className="bg-black">
                WhatsApp
              </option>
              <option value="phone" className="bg-black">
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
              placeholder="Mobile Number"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div className="relative md:col-span-2 mt-4">
            <textarea
              placeholder="How can we help you?*"
              className="w-full p-4 bg-transparent border-0 border-b-2 border-gray-600 rounded-none h-32 resize-none placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-8">
            <button
              type="submit"
              className="px-12 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-medium uppercase tracking-wide transition-all duration-300 hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
