import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ecoGreen to-ecoBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Ready to transform your waste management?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of homes and businesses already making a difference
              with EcoSort Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-white text-ecoGreen py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                Watch Demo
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-white py-3 px-8 rounded-md font-medium hover:bg-white hover:text-ecoGreen transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Book a Consultation
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl border border-white border-opacity-30">
              <h3 className="text-xl font-bold mb-4">Get started today</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="interest" className="sr-only">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                  >
                    <option value="" disabled selected>
                      I'm interested in...
                    </option>
                    <option value="residential">Residential Solution</option>
                    <option value="commercial">Commercial Solution</option>
                    <option value="enterprise">Enterprise Solution</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-ecoDark text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
