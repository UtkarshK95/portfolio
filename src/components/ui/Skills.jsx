import React from "react";
import {
  FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaJenkins, FaFigma, FaOctopusDeploy,
} from "react-icons/fa";
import {
  SiTailwindcss, SiStyledcomponents, SiTypescript, SiRedux,
  SiExpress, SiMongodb, SiJest, SiCypress, SiSitecore, SiKentico,
} from "react-icons/si";
import { GiArtificialHive, GiBrain } from "react-icons/gi";
import { ImPieChart } from "react-icons/im";
import { RiNextjsFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { GrGraphQl } from "react-icons/gr";
import { LuTestTubeDiagonal } from "react-icons/lu";
import data from "../../utils/data.json";

const iconMap = {
  FaHtml5, FaCss3Alt, FaSass, FaBootstrap, SiTailwindcss, SiStyledcomponents,
  FaJs, SiTypescript, ImPieChart, FaReact, SiRedux, RiNextjsFill,
  FaNodeJs, SiExpress, SiMongodb, FaGitAlt, FaJenkins, FaFigma,
  GoGear, GrGraphQl, SiJest, LuTestTubeDiagonal, FaOctopusDeploy,
  SiCypress, SiSitecore, SiKentico, GiBrain, GiArtificialHive,
};

const categoryOrder = [
  "Languages",
  "Frameworks & Libraries",
  "UI & Styling",
  "Backend",
  "Testing",
  "Tools & DevOps",
  "CMS",
  "AI / ML",
];

const Skills = () => {
  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = data.skills.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <div className="space-y-6 mt-4">
      {categoryOrder.map((category) => (
        <div key={category}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-700 pb-1">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {grouped[category].map((skill) => {
              const Icon = iconMap[skill.icon];
              if (!Icon) return null;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors duration-200"
                >
                  <Icon className="text-lg text-gray-300" aria-label={skill.name} />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
