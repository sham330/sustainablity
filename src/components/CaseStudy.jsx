import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faUniversity,
  faCheckCircle,
  faArrowRight,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Green Eats Restaurant Group",
      icon: faUtensils,
      iconBg: "bg-ecoGreen",
      imageBg: "bg-green-100",
      description:
        "How a 12-location restaurant chain achieved 82% waste diversion and saved $28,000 annually in waste costs.",
      stats: [
        { label: "82% diversion rate" },
        { label: "$28K annual savings" },
        { label: "100% compliance" },
        { label: "12 locations" },
      ],
    },
    {
      id: 2,
      title: "State University",
      icon: faUniversity,
      iconBg: "bg-ecoBlue",
      imageBg: "bg-blue-100",
      description:
        "How a 25,000-student campus implemented EcoSort across 45 buildings to meet sustainability goals.",
      stats: [
        { label: "75% diversion rate" },
        { label: "45 buildings" },
        { label: "320 smart bins" },
        { label: "$62K savings" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Case Studies
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Real-world impact
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            See how organizations are transforming their waste management with
            EcoSort Pro.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`h-48 ${study.imageBg} flex items-center justify-center`}
              >
                <FontAwesomeIcon
                  icon={study.icon}
                  className="text-6xl opacity-30"
                  style={{
                    color:
                      study.iconBg === "bg-ecoGreen" ? "#10B981" : "#3B82F6",
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 ${study.iconBg} rounded-md p-2 text-white`}
                  >
                    <FontAwesomeIcon icon={study.icon} />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    {study.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{study.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-ecoGreen mr-2"
                      />
                      <span className="text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="text-ecoGreen font-medium hover:text-green-600 transition duration-300 inline-flex items-center"
                  >
                    Read case study{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-ecoGreen bg-green-50 hover:bg-green-100 transition duration-300"
          >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" /> View all case
            studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
