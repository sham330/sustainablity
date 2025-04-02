import React, { useState } from "react";
import { FaRecycle, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FaRecycle className="text-ecoGreen text-2xl mr-2" />
              <span className="text-xl font-bold text-ecoDark">
                EcoSort Pro
              </span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Solutions
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Pricing
            </a>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Dashboard
            </Link>
            <a
              href="#faq"
              className="text-gray-700 hover:text-ecoGreen px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              FAQ
            </a>
            <Link
              to="/login"
              className="bg-ecoGreen text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-ecoGreen focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            Features
          </a>
          <a
            href="#solutions"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            Solutions
          </a>
          <a
            href="#how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            Process
          </a>
          <a
            href="#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            Pricing
          </a>
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            Dashboard
          </Link>
          <a
            href="#faq"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ecoGreen"
            onClick={toggleMobileMenu}
          >
            FAQ
          </a>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium bg-ecoGreen text-white hover:bg-green-600"
            onClick={toggleMobileMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
