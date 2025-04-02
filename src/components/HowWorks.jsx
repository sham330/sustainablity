import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faBoxOpen,
  faTrashAlt,
  faCalendarCheck,
  faChartLine,
  faCheckCircle,
  faAppleAlt,
  faRecycle,
  faTrash,
  faBiohazard,
  faMicrochip,
  faTemperatureHigh,
  faCamera,
  faCompressAlt,
  faExclamationTriangle,
  faLock,
  faWeightHanging,
  faFillDrip,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Process
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How EcoSort Pro Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            A seamless waste management experience from start to finish
          </p>
        </div>

        <div className="mt-16">
          {/* Vertical Process Steps */}
          <div className="max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="process-step relative pl-16 pb-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-ecoGreen text-white z-10">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="mr-3 text-ecoGreen"
                  />{" "}
                  Account Setup
                </h3>
                <p className="mt-2 text-gray-600">
                  Create your account and complete your profile with details
                  about your location and waste generation patterns.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Quick 5-minute setup</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Needs assessment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step relative pl-16 pb-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-ecoBlue text-white z-10">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="mr-3 text-ecoBlue"
                  />{" "}
                  Receive Your Smart Bins
                </h3>
                <p className="mt-2 text-gray-600">
                  We deliver and install your smart waste bins equipped with
                  sensors and identification technology.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Color-coded containers</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>QR code identification</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Weight sensors</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Weather-resistant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step relative pl-16 pb-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-ecoPurple text-white z-10">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="mr-3 text-ecoPurple"
                  />{" "}
                  Sort Your Waste
                </h3>
                <p className="mt-2 text-gray-600">
                  Place waste in the appropriate bins. Our AI system verifies
                  correct sorting and provides feedback.
                </p>
                <div className="mt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
                      <FontAwesomeIcon
                        icon={faAppleAlt}
                        className="text-green-600 text-2xl mb-2"
                      />
                      <span className="text-sm font-medium">Organic</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                      <FontAwesomeIcon
                        icon={faRecycle}
                        className="text-blue-600 text-2xl mb-2"
                      />
                      <span className="text-sm font-medium">Recyclable</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-gray-600 text-2xl mb-2"
                      />
                      <span className="text-sm font-medium">Landfill</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="process-step relative pl-16 pb-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-ecoYellow text-white z-10">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="mr-3 text-ecoYellow"
                  />{" "}
                  Schedule Collection
                </h3>
                <p className="mt-2 text-gray-600">
                  When bins are full, schedule pickup through our app. Our
                  system automatically routes collectors.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>On-demand or scheduled</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Driver notifications</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Route optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="process-step relative pl-16">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-ecoDark text-white z-10">
                <span className="text-xl font-bold">5</span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="mr-3 text-ecoDark"
                  />{" "}
                  Track & Improve
                </h3>
                <p className="mt-2 text-gray-600">
                  Monitor your waste reduction progress through detailed
                  analytics and get recommendations.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Real-time dashboards</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Monthly reports</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Cost savings analysis</span>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-ecoGreen mt-1 mr-2"
                    />
                    <span>Sustainability goals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waste Bins Visualization */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Smart Bin Ecosystem
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Organic */}
            <div className="trash-bin flex flex-col items-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-4 border-4 border-green-300">
                <FontAwesomeIcon
                  icon={faAppleAlt}
                  className="text-green-600 text-3xl"
                />
              </div>
              <h4 className="font-medium text-gray-900">Organic Waste</h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Food scraps, yard waste, biodegradable materials
              </p>
              <div className="mt-4 flex items-center text-green-600 text-sm">
                <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                <span>Moisture sensor</span>
              </div>
              <div className="mt-1 flex items-center text-green-600 text-sm">
                <FontAwesomeIcon icon={faTemperatureHigh} className="mr-2" />
                <span>Temperature monitor</span>
              </div>
            </div>

            {/* Recyclable */}
            <div className="trash-bin flex flex-col items-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-4 border-blue-300">
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="text-blue-600 text-3xl"
                />
              </div>
              <h4 className="font-medium text-gray-900">Recyclables</h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Paper, plastic, metal, glass, cardboard
              </p>
              <div className="mt-4 flex items-center text-blue-600 text-sm">
                <FontAwesomeIcon icon={faCamera} className="mr-2" />
                <span>AI sorting verification</span>
              </div>
              <div className="mt-1 flex items-center text-blue-600 text-sm">
                <FontAwesomeIcon icon={faCompressAlt} className="mr-2" />
                <span>Compaction alert</span>
              </div>
            </div>

            {/* Hazardous */}
            <div className="trash-bin flex flex-col items-center p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <div className="h-24 w-24 bg-yellow-100 rounded-full flex items-center justify-center mb-4 border-4 border-yellow-300">
                <FontAwesomeIcon
                  icon={faBiohazard}
                  className="text-yellow-600 text-3xl"
                />
              </div>
              <h4 className="font-medium text-gray-900">Hazardous</h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Batteries, chemicals, electronics, medical
              </p>
              <div className="mt-4 flex items-center text-yellow-600 text-sm">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-2"
                />
                <span>Safety monitoring</span>
              </div>
              <div className="mt-1 flex items-center text-yellow-600 text-sm">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                <span>Secure access</span>
              </div>
            </div>

            {/* Landfill */}
            <div className="trash-bin flex flex-col items-center p-6 bg-gray-100 rounded-xl border-2 border-gray-300">
              <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 border-4 border-gray-400">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-gray-600 text-3xl"
                />
              </div>
              <h4 className="font-medium text-gray-900">Landfill</h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Non-recyclable, non-hazardous materials
              </p>
              <div className="mt-4 flex items-center text-gray-600 text-sm">
                <FontAwesomeIcon icon={faWeightHanging} className="mr-2" />
                <span>Precise weighing</span>
              </div>
              <div className="mt-1 flex items-center text-gray-600 text-sm">
                <FontAwesomeIcon icon={faFillDrip} className="mr-2" />
                <span>Fill level sensor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
