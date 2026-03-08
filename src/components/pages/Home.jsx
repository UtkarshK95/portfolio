import React from "react";
import Coding from "../../assets/coding.svg";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../../utils/data.json";

const tags = ["Senior Software Engineer", "BITS Pilani", "7+ Years", "ReactJS / NextJS", "Generative AI (RAG)"];

const Home = () => {
  return (
    <div className="relative text-gray-400 bg-gray-900 body-font overflow-hidden" style={{ height: "calc(100vh - 4rem)" }}>
      {/* Background bubbles */}
      <div className="absolute top-10 right-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />
      <div className="relative z-10 container mx-auto px-10 h-full flex md:flex-row flex-col items-center justify-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-1">Welcome</p>
          <p className="text-xl md:text-2xl font-normal text-gray-400">Hi, I am</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-1 text-green-500">
            {data.profile.name}
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-md leading-relaxed">
            Building high-quality digital experiences with modern web tech and AI.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 md:justify-start justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={data.profile.resumeLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-500 px-4 py-1.5 rounded-lg transition-colors duration-200"
            >
              Resume
              <HiDownload className="text-base" />
            </a>
            <a
              href={data.profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={data.profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:block md:w-1/2 max-w-md">
          <img
            className="object-contain w-full h-full"
            src={Coding}
            alt="Illustration of coding"
          />
        </div>
      </div>
    </div>
  );
};


export default Home;
