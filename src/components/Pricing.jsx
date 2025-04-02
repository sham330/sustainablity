import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">Starter</h3>
              <p className="mt-4 text-gray-600">
                Perfect for individuals and small households
              </p>
              <div className="mt-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $19
                  </span>
                  <span className="ml-1 text-lg font-medium text-gray-600">
                    /month
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Billed annually ($228) or $25 month-to-month
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>1 Smart Bin (choose type)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Weekly collection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Basic sorting analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Mobile app access</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-times mt-1 mr-3"></i>
                  <span>No priority scheduling</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-times mt-1 mr-3"></i>
                  <span>No commercial waste</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                to="/login"
                className="w-full block text-center bg-gray-100 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Popular Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-ecoGreen relative flex flex-col">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-ecoGreen text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">Family</h3>
              <p className="mt-4 text-gray-600">
                Ideal for families and shared living spaces
              </p>
              <div className="mt-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $39
                  </span>
                  <span className="ml-1 text-lg font-medium text-gray-600">
                    /month
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Billed annually ($468) or $49 month-to-month
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>3 Smart Bins (mix & match)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Twice weekly collection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Mobile + web access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-times mt-1 mr-3"></i>
                  <span>No commercial waste</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                to="/login"
                className="w-full block text-center bg-ecoGreen text-white py-3 px-6 rounded-md font-medium hover:bg-green-600 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">Business</h3>
              <p className="mt-4 text-gray-600">
                For offices, restaurants, and commercial spaces
              </p>
              <div className="mt-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $99
                  </span>
                  <span className="ml-1 text-lg font-medium text-gray-600">
                    /month
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Billed annually ($1,188) or $129 month-to-month
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>5 Smart Bins (any combination)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Daily collection available</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Premium analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Multi-user access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Priority 24/7 scheduling</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-ecoGreen mt-1 mr-3"></i>
                  <span>Commercial waste included</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                to="/login"
                className="w-full block text-center bg-gray-100 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Enterprise Option */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900">
                Enterprise Solutions
              </h3>
              <p className="mt-4 text-gray-600">
                Need custom waste management solutions for large facilities,
                municipalities, or industrial operations? Our enterprise plans
                offer scalable solutions with dedicated support.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>Custom bin configurations</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>API integrations</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>On-site training</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>Compliance reporting</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-ecoGreen mt-1 mr-2"></i>
                  <span>Volume discounts</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex lg:flex-col items-center justify-end">
              <Link
                to="/login"
                className="w-full lg:w-auto text-center bg-ecoDark text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition duration-300 inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
