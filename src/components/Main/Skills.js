import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";

function Skills() {
  return (
    <div>
      <h1 class="text-3xl py-10 font-medium title-font text-gray-900 mb-12 text-center">
        Skills
      </h1>
      <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaHtml5 className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">HTML 5</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaCss3Alt className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">CSS 3</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaJs className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">JavaScript</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaReact className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">ReactJS</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <SiRedux className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">Redux</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <SiTailwindcss className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">Tailwind</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaNode className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">NodeJS</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <SiAzuredevops className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">Azure Devops</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <SiMysql className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">MySQL</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaGitAlt className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">Git</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <AiOutlineGithub className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">GitHub</p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
          <FaNpm className="text-4xl mx-auto inline-block" />
          <p className="text-xl font-semibold mt-4">npm</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
