import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJenkins,
  FaFigma,
  FaOctopusDeploy,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiJest,
  SiCypress,
  SiSitecore,
  SiKentico,
} from "react-icons/si";
import { GiArtificialHive, GiBrain } from "react-icons/gi";
import { ImPieChart } from "react-icons/im";
import { RiNextjsFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { GrGraphQl } from "react-icons/gr";
import { LuTestTube2 } from "react-icons/lu";

import data from "../../utils/data.json";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaSass: FaSass,
  FaBootstrap: FaBootstrap,
  SiTailwindcss: SiTailwindcss,
  SiStyledcomponents: SiStyledcomponents,
  FaJs: FaJs,
  SiTypescript: SiTypescript,
  ImPieChart: ImPieChart,
  FaReact: FaReact,
  SiRedux: SiRedux,
  RiNextjsFill: RiNextjsFill,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  FaGitAlt: FaGitAlt,
  FaJenkins: FaJenkins,
  FaFigma: FaFigma,
  GoGear: GoGear,
  GrGraphQl: GrGraphQl,
  SiJest: SiJest,
  LuTestTube2: LuTestTube2,
  FaOctopusDeploy: FaOctopusDeploy,
  SiCypress: SiCypress,
  SiSitecore: SiSitecore,
  SiKentico: SiKentico,
  GiBrain: GiBrain,
  GiArtificialHive: GiArtificialHive,
};

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-center max-w-10xl mx-auto mt-4">
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
