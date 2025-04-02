import React from "react";
import {
  FaHome,
  FaUsers,
  FaCheckCircle,
  FaChevronRight,
  FaBuilding,
  FaBriefcase,
  FaIndustry,
  FaHardHat,
  FaUtensils,
  FaGraduationCap,
  FaMedkit,
  FaCity,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SolutionsSection = () => {
  const navigate = useNavigate();
  const mainSolutions = [
    {
      icon: <FaHome className="text-6xl text-ecoGreen opacity-30" />,
      bgColor: "bg-green-100",
      title: "Residential",
      iconBox: <FaUsers className="text-lg" />,
      iconBoxColor: "bg-ecoGreen",
      description:
        "Perfect for homes, apartments, and condominiums looking to improve recycling rates and reduce waste costs.",
      features: [
        "Smart bins with color coding",
        "Weekly collection scheduling",
        "Rewards program for proper sorting",
      ],
      linkText: "Explore residential solutions",
    },
    {
      icon: <FaBuilding className="text-6xl text-ecoBlue opacity-30" />,
      bgColor: "bg-blue-100",
      title: "Commercial",
      iconBox: <FaBriefcase className="text-lg" />,
      iconBoxColor: "bg-ecoBlue",
      description:
        "Comprehensive waste management for offices, retail stores, and service businesses of all sizes.",
      features: [
        "High-capacity smart containers",
        "Custom collection schedules",
        "Detailed waste analytics",
        "Compliance reporting",
      ],
      linkText: "Explore commercial solutions",
    },
    {
      icon: <FaIndustry className="text-6xl text-ecoPurple opacity-30" />,
      bgColor: "bg-purple-100",
      title: "Industrial",
      iconBox: <FaHardHat className="text-lg" />,
      iconBoxColor: "bg-ecoPurple",
      description:
        "Specialized solutions for manufacturing plants, warehouses, and industrial facilities.",
      features: [
        "Heavy-duty waste containers",
        "Hazardous waste tracking",
        "Material recovery systems",
        "Dedicated account manager",
      ],
      linkText: "Explore industrial solutions",
    },
  ];

  const moreSolutions = [
    {
      icon: <FaUtensils className="text-xl" />,
      bgColor: "bg-green-50",
      textColor: "text-ecoGreen",
      title: "Hospitality",
      description: "Restaurants, hotels, and food service",
    },
    {
      icon: <FaGraduationCap className="text-xl" />,
      bgColor: "bg-blue-50",
      textColor: "text-ecoBlue",
      title: "Education",
      description: "Schools, universities, and campuses",
    },
    {
      icon: <FaMedkit className="text-xl" />,
      bgColor: "bg-yellow-50",
      textColor: "text-ecoYellow",
      title: "Healthcare",
      description: "Hospitals, clinics, and medical facilities",
    },
    {
      icon: <FaCity className="text-xl" />,
      bgColor: "bg-purple-50",
      textColor: "text-ecoPurple",
      title: "Municipal",
      description: "City-wide waste management programs",
    },
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Solutions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for Your Needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We offer specialized solutions for every type of waste generator.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`h-48 ${solution.bgColor} flex items-center justify-center`}
              >
                {solution.icon}
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 ${solution.iconBoxColor} rounded-md p-2 text-white`}
                  >
                    {solution.iconBox}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{solution.description}</p>
                <ul className="mt-6 space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-ecoGreen mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/dashboard"
                    className="text-ecoGreen font-medium hover:text-green-600 transition duration-300 inline-flex items-center"
                  >
                    {solution.linkText}
                    <FaChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Solutions */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moreSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start"
            >
              <div
                className={`flex-shrink-0 ${solution.bgColor} p-3 rounded-md ${solution.textColor}`}
              >
                {solution.icon}
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">{solution.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
