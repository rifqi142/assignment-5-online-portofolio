import React from "react";
import { interests } from "../constants";

const Interest = () => {
  return (
    <div
      className="mt-5 lg:mt-16 pb-5 xl:pb-48 w-full transition-all duration-300"
      id="interest"
    >
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <h3 className="text-4xl font-bold text-white">Interest</h3>
        <hr class="mt-3 h-line w-56" />
      </div>

      {/* List of Interests */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="text-2xl font-semibold text-white mb-3">
              {interest.title}
            </h4>
            <p className="text-gray-400">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
