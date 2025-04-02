import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faRecycle,
  faCity,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const StatsSection = () => {
  const stats = [
    { value: "12,548+", label: "Happy Users", icon: faUsers },
    { value: "87%", label: "Waste Diverted", icon: faRecycle },
    { value: "45+", label: "Cities Served", icon: faCity },
    { value: "24/7", label: "Support Available", icon: faHeadset },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-ecoGreen to-ecoBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold mb-2 animate-pulse-slow">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider flex items-center justify-center">
                <FontAwesomeIcon icon={stat.icon} className="mr-2" />
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
