import React from "react";
import { skillLists } from "../constants";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div
      className="pb-10 xl:pb-40 w-full flex flex-col justify-center items-center mt-5 xl:mt-16 transition-all duration-300"
      id="skill"
      data-aos="zoom-in-up"
    >
      <div className="tools-skill flex flex-col justify-center items-center">
        <h3 className="text-4xl leading-tight font-bold text-white">
          Tools & Skills
        </h3>
        <hr className="mt-3 h-line w-56" />
      </div>

      <div
        className="inline-flex flex-row flex-wrap justify-center items-center mt-10 gap-4 bg-white py-4 px-4 rounded-lg"
        id="list-tools"
      >
        {skillLists.map((skill) =>
          skill.path ? (
            <Link key={skill.key} to={skill.path} className="cursor-pointer">
              <img
                src={`assets/${skill.icon}`}
                className="w-12 h-12 sm:w-20 sm:h-20"
                alt={skill.name}
              />
            </Link>
          ) : (
            <a
              key={skill.key}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={`assets/${skill.icon}`}
                className="w-12 h-12 sm:w-20 sm:h-20"
                alt={skill.name}
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
