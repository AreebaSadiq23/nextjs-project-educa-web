"use client";
import React, { useState } from "react";
import { FaBullseye, FaEye, FaStar } from "react-icons/fa";

type Section = "mission" | "vision" | "chooseUs";

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState<Record<Section, boolean>>({
    mission: false,
    vision: false,
    chooseUs: false,
  });

  const toggleMore = (section: Section) => {
    setShowMore((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-pink-300 to-pink-300 py-16 px-6 text-white max-w-screen-2xl mx-auto"
    >
      <div className="absolute inset-0 bg-[url('/path-to-background-image.svg')] bg-cover opacity-10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
          About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Mission Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaBullseye size={30} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p>
              To empower students with the knowledge and skills they need to
              succeed in a rapidly changing world, using innovative teaching
              methods.
            </p>
            {showMore.mission && (
              <p className="mt-2">
                We aim to create a collaborative environment where students can
                explore their potential, enhance their critical thinking
                abilities, and adapt to new challenges.
              </p>
            )}
            <button
              onClick={() => toggleMore("mission")}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              {showMore.mission ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Our Vision Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaEye size={30} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p>
              To be a leader in the field of education by providing high-quality
              learning experiences that inspire and engage students.
            </p>
            {showMore.vision && (
              <p className="mt-2">
                Our vision is to foster a culture of lifelong learning where
                students are encouraged to innovate and contribute positively to
                society.
              </p>
            )}
            <button
              onClick={() => toggleMore("vision")}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              {showMore.vision ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaStar size={30} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
            </div>
            <p>
              With a dedicated team and a student-centered approach, we focus on
              holistic development, critical thinking, and practical learning.
            </p>
            {showMore.chooseUs && (
              <p className="mt-2">
                We ensure that every student gets personalized attention,
                hands-on experience, and the necessary resources to excel in
                their chosen fields.
              </p>
            )}
            <button
              onClick={() => toggleMore("chooseUs")}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              {showMore.chooseUs ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
