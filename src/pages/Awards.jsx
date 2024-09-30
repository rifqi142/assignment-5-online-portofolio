import React from "react";
import { awards } from "../constants";

const Awards = () => {
  return (
    <div className="mt-5 pb-14 w-full transition-all duration-300" id="awards">
      {/* Heading Section */}
      <div
        className="flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <h3 className="text-4xl font-bold text-white">
          Awards <span className="text-[#97a7b7] text-sm">(Dummy)</span>
        </h3>
        <hr class="mt-3 h-line w-56" />
      </div>

      {/* List of Awards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="text-2xl font-semibold text-white mb-2">
              {award.title}
            </h4>
            <p className="text-gray-400 mb-2">{award.description}</p>
            <span className="text-gray-500 italic">{award.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
