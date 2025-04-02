import React from "react";
import {
  FaRobot,
  FaMobileAlt,
  FaChartPie,
  FaCheck,
  FaArrowRight,
  FaExternalLinkAlt,
  FaQrcode,
  FaWeight,
  FaBell,
  FaTruck,
} from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const FeaturesSection = () => {
  // Main features data
  const mainFeatures = [
    {
      icon: <FaRobot className="text-xl" />,
      bgColor: "bg-ecoGreen",
      title: "AI-Powered Sorting",
      description:
        "Our advanced computer vision system automatically categorizes waste with 95%+ accuracy across 27 waste types.",
      bullets: [
        "Real-time waste identification",
        "Continuous learning algorithm",
        "Multi-language support",
      ],
      footer: {
        type: "link",
        text: "Explore AI features",
        icon: <FaArrowRight className="ml-1" />,
      },
    },
    {
      icon: <FaMobileAlt className="text-xl" />,
      bgColor: "bg-ecoBlue",
      title: "Mobile Management",
      description:
        "Complete control of your waste management system from our iOS and Android apps.",
      bullets: [
        "Bin status monitoring",
        "Collection scheduling",
        "Driver tracking",
        "Instant notifications",
      ],
      footer: {
        type: "appLinks",
        links: [
          { icon: <FaApple className="text-2xl" />, href: "#" },
          { icon: <FaGooglePlay className="text-2xl" />, href: "#" },
        ],
      },
    },
    {
      icon: <FaChartPie className="text-xl" />,
      bgColor: "bg-ecoPurple",
      title: "Advanced Analytics",
      description:
        "Powerful insights into your waste streams with customizable reporting.",
      bullets: [
        "Real-time dashboards",
        "Waste reduction tracking",
        "Cost savings analysis",
        "Regulatory compliance",
      ],
      footer: {
        type: "link",
        text: "View sample reports",
        icon: <FaExternalLinkAlt className="ml-1" />,
      },
    },
  ];

  // Additional features data
  const additionalFeatures = [
    {
      icon: <FaQrcode className="text-xl" />,
      bgColor: "bg-ecoYellow",
      title: "Smart Bin ID",
      description: "Each bin has a unique QR code for tracking and management.",
    },
    {
      icon: <FaWeight className="text-xl" />,
      bgColor: "bg-ecoGreen",
      title: "Weight Sensors",
      description: "Precise measurement of waste volume in each container.",
    },
    {
      icon: <FaBell className="text-xl" />,
      bgColor: "bg-ecoBlue",
      title: "Fill Alerts",
      description: "Automatic notifications when bins need emptying.",
    },
    {
      icon: <FaTruck className="text-xl" />,
      bgColor: "bg-ecoPurple",
      title: "Route Optimization",
      description: "AI calculates most efficient collection routes.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Waste Management Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Everything you need to optimize waste sorting, collection, and
            recycling in one integrated system.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card pt-6 bg-white rounded-lg overflow-hidden shadow-md transition duration-300 border border-gray-100 hover:shadow-lg"
              >
                <div className="px-6 pb-8">
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.bgColor} text-white mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-ecoGreen mt-1 mr-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  {feature.footer.type === "link" ? (
                    <a
                      href="#"
                      className="text-ecoGreen font-medium hover:text-green-600 transition duration-300 inline-flex items-center"
                    >
                      {feature.footer.text} {feature.footer.icon}
                    </a>
                  ) : (
                    <div className="flex space-x-4">
                      {feature.footer.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="text-gray-700 hover:text-gray-900"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition duration-300"
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.bgColor} text-white mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
