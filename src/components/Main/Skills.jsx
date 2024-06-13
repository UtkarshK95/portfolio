import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJest, SiTypescript } from "react-icons/si";
import data from "../../utils/data.json";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  SiTypescript: SiTypescript,
  FaReact: FaReact,
  SiRedux: SiRedux,
  SiTailwindcss: SiTailwindcss,
  FaGitAlt: FaGitAlt,
  SiJest: SiJest,
};

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto mt-8">
        {data.skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <div
              key={index}
              className="m-4 w-40 flex-none text-center p-5 rounded-xl border-2 border-gray-300"
            >
              <IconComponent
                className="text-4xl mx-auto"
                aria-label={skill.name}
              />
              <p className="text-xl font-semibold mt-4">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
