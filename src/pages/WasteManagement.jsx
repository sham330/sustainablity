import { useEffect } from "react";
import {
  FaRecycle,
  FaBars,
  FaArrowRight,
  FaPlayCircle,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
// import NavBar from " /components/NavBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Hero";
import Logo from "../components/Logo";
import Feature from "../components/Feature";
import Solution from "../components/Solution";
import HowWorks from "../components/HowWorks";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Fqa from "../components/Fqa";
import CaseStudy from "../components/CaseStudy";
import Awards from "../components/Awards";
import CTA from "../components/CTA";
import Team from "../components/Team";
const WasteManagement = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        }
      });
    });

    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll(".feature-card, .trash-bin");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }

    // Set initial state for animated elements
    document.querySelectorAll(".feature-card, .trash-bin").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Run on load and scroll
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);

    return () => {
      // Cleanup event listeners
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener("click", animateOnScroll);
      }
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="font-sans antialiased text-ecoDark">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      <Logo />

      <Feature />

      <Solution />
      <HowWorks />
      <Pricing />
      <Testimonials />
      <Stats />
      <Fqa />
      <CaseStudy />
      {/* <Team /> */}
      <Awards />
      <CTA />

      {/* Footer */}
      <footer className="bg-ecoDark text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center">
                <FaRecycle className="text-ecoGreen text-2xl mr-2" />
                <span className="text-xl font-bold text-white">
                  EcoSort Pro
                </span>
              </div>
              <p className="mt-4 text-sm">
                Making waste sorting efficient, accessible, and rewarding for a
                sustainable future.
              </p>
              <div className="mt-6 flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    For Homes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    For Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    For Municipalities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    For Schools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    For Healthcare
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2023 EcoSort Pro. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-sm hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WasteManagement;
