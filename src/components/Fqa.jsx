import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI waste sorting work?",
      answer:
        "Our smart bins use computer vision and machine learning to automatically categorize waste items as they're disposed. The system analyzes visual features and compares them against our extensive waste database to determine the correct bin with over 95% accuracy. The AI continuously improves as it processes more waste items.",
    },
    {
      question: "What happens if I put something in the wrong bin?",
      answer:
        "Our system will detect common misplacements and provide immediate feedback through the app or bin display. For commercial customers, we offer contamination alerts to staff. Our collection team also performs final quality checks and will notify you of any significant sorting issues that need correction.",
    },
    {
      question: "How often are collections scheduled?",
      answer:
        "Collection frequency depends on your plan and needs. Residential plans typically include weekly or twice-weekly pickups. Commercial customers can choose daily, weekly, or on-demand collection. Our smart bins automatically notify you (and our system) when they're approaching capacity to optimize collection timing.",
    },
    {
      question: "What types of waste do you handle?",
      answer:
        "We handle all common waste streams including organic/food waste, recyclables (paper, plastic, metal, glass), e-waste, hazardous materials (with special handling), and landfill waste. Our system can be customized to accommodate specialized waste streams for commercial and industrial customers.",
    },
    {
      question: "Is there a long-term contract required?",
      answer:
        "No long-term contracts are required. We offer month-to-month plans with the option for annual billing (which comes with a discount). You can cancel anytime with 30 days notice. For commercial customers with specialized equipment needs, we may offer custom contract terms.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            FAQs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Everything you need to know about EcoSort Pro.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="text-ecoGreen mr-3"
                    />
                    {faq.question}
                  </h3>
                  <span className="text-gray-500">
                    {expandedIndex === index ? "−" : "+"}
                  </span>
                </div>
                {expandedIndex === index && (
                  <p className="mt-4 text-gray-600 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">Still have questions?</p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-ecoGreen hover:bg-green-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
