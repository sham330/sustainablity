import React from "react";
import {
  FaPlayCircle,
  FaTag,
  FaCheckCircle,
  FaLeaf,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-pattern pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center bg-green-100 rounded-full p-2 pr-4 mb-4">
              <span className="bg-ecoGreen text-white text-xs font-semibold px-3 py-1 rounded-full">
                NEW
              </span>
              <span className="ml-2 text-sm font-medium text-ecoDark">
                AI-powered waste analytics now available
              </span>
              <FaArrowRight className="ml-2 text-ecoGreen" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your</span>
              <span className="block text-ecoGreen">Waste Management</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              EcoSort Pro combines smart technology with sustainable practices
              to revolutionize how homes and businesses handle waste. Our
              comprehensive system increases recycling rates by up to 300% while
              reducing costs.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ecoGreen hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
                >
                  <FaPlayCircle className="mr-2" />
                  Watch Demo
                </a>
                <a
                  href="#pricing"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-ecoGreen bg-white border-ecoGreen hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
                >
                  <FaTag className="mr-2" />
                  View Pricing
                </a>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <FaCheckCircle className="text-ecoGreen mr-2" />
                <span>Trusted by 1,200+ businesses worldwide</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-auto animate-float"
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Waste sorting facility"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-ecoBlue p-4 rounded-full shadow-xl animate-pulse-slow">
                <FaLeaf className="text-white text-3xl" />
              </div>
              <div className="absolute -top-6 -left-6 bg-ecoYellow p-4 rounded-full shadow-xl animate-bounce-slow">
                <FaTrophy className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
