import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faTrophy,
  faMedal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Green Tech Award 2023",
      description: "Best Sustainability Innovation",
      icon: faAward,
      iconBg: "bg-green-100",
      iconColor: "text-ecoGreen",
    },
    {
      id: 2,
      title: "Clean Earth Prize",
      description: "Waste Management Category",
      icon: faTrophy,
      iconBg: "bg-blue-100",
      iconColor: "text-ecoBlue",
    },
    {
      id: 3,
      title: "AI Excellence Award",
      description: "Applied Computer Vision",
      icon: faMedal,
      iconBg: "bg-yellow-100",
      iconColor: "text-ecoYellow",
    },
    {
      id: 4,
      title: "B Corp Certified",
      description: "Meeting high standards",
      icon: faStar,
      iconBg: "bg-purple-100",
      iconColor: "text-ecoPurple",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Awards & Recognition
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Celebrating excellence
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`h-16 w-16 ${award.iconBg} rounded-full flex items-center justify-center mb-4 ${award.iconColor}`}
              >
                <FontAwesomeIcon icon={award.icon} className="text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                {award.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
