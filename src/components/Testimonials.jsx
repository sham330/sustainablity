import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our customers say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Sarah Johnson"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">
                  Sarah Johnson
                </h4>
                <p className="text-sm text-gray-600">Home User • Seattle</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 italic">
              "EcoSort has completely changed how we handle waste at home. The
              smart bins make sorting so easy, and the collection service is
              always punctual. We've reduced our landfill waste by 70%!"
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2"></i>
              <span>Using EcoSort for 8 months</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Michael Chen"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">
                  Michael Chen
                </h4>
                <p className="text-sm text-gray-600">
                  Restaurant Owner • Chicago
                </p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text-gray-700 italic">
              "As a restaurant owner, waste management was always a challenge.
              With EcoSort, we've streamlined our operations and even saved
              money by properly recycling our organic waste. The analytics
              helped us reduce food waste by 40%."
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2"></i>
              <span>Using EcoSort for 1 year</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emma Rodriguez"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">
                  Emma Rodriguez
                </h4>
                <p className="text-sm text-gray-600">
                  Property Manager • Miami
                </p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 italic">
              "Implementing EcoSort in our 200-unit apartment complex has been a
              game-changer. Residents love the convenience, and we've seen a
              dramatic improvement in our building's sustainability metrics. Our
              waste costs dropped by 35% in the first quarter."
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2"></i>
              <span>Using EcoSort for 1.5 years</span>
            </div>
          </div>
        </div>

        {/* More Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="David Kim"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">David Kim</h4>
                <p className="text-sm text-gray-600">
                  Office Manager • San Francisco
                </p>
              </div>
            </div>
            <div className="mt-4 flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="mt-2 text-gray-700 text-sm italic">
              "Our office recycling rate went from 25% to 85% after implementing
              EcoSort. The team actually enjoys using the system!"
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://randomuser.me/api/portraits/women/54.jpg"
                  alt="Lisa Wong"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">Lisa Wong</h4>
                <p className="text-sm text-gray-600">
                  School Administrator • Boston
                </p>
              </div>
            </div>
            <div className="mt-4 flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="mt-2 text-gray-700 text-sm italic">
              "The educational materials and gamification features have made
              waste sorting fun for our students. We've incorporated it into our
              science curriculum."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
