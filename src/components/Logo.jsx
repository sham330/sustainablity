import React from "react";

const LogoCloud = () => {
  // Array of logo data for easier management
  const logos = [
    { src: "https://logo.clearbit.com/walmart.com", alt: "Walmart" },
    { src: "https://logo.clearbit.com/starbucks.com", alt: "Starbucks" },
    { src: "https://logo.clearbit.com/hilton.com", alt: "Hilton" },
    { src: "https://logo.clearbit.com/ibm.com", alt: "IBM" },
    { src: "https://logo.clearbit.com/harvard.edu", alt: "Harvard" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Trusted by industry leaders
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={index} className="col-span-1 flex justify-center">
              <img
                className="h-12 opacity-60 hover:opacity-100 transition duration-300"
                src={logo.src}
                alt={logo.alt}
                loading="lazy" // Added for better performance
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
