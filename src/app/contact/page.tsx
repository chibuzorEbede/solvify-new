import React from "react";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center pt-8 pb-8 px-2 sm:px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Get in touch with us
        </h1>
        <div className="w-full bg-gray-50 rounded-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-8 items-stretch">
          {/* Contact Form */}
          <form className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2 text-left">
              Drop us a message
            </h2>
            <p className="text-gray-600 text-left mb-4">
              We will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none w-full"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-blue-800 text-white rounded-full font-semibold text-lg hover:bg-blue-900 transition w-full"
            >
              Send
            </button>
          </form>
          {/* Contact Details */}
          <div className="flex-1 flex flex-col gap-6 items-start justify-center mt-8 md:mt-0">
            <div className="flex items-center gap-3 text-lg">
              <span className="inline-block bg-blue-800 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l9.72 7.29a.75.75 0 00.84 0l9.72-7.29"
                  />
                </svg>
              </span>
              <span>solvifyconcept@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="inline-block bg-blue-800 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l9.72 7.29a.75.75 0 00.84 0l9.72-7.29"
                  />
                </svg>
              </span>
              <span>+234-9099838322</span>
            </div>
          </div>
        </div>
      </section>
      {/* Social Icons */}
      <div className="flex gap-6 justify-center mt-8 mb-4 text-2xl">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-blue-800 p-2 rounded-full"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-blue-800 p-2 rounded-full"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-800 p-2 rounded-full"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-blue-800 p-2 rounded-full"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}
