import React from "react";
import Coding from "../../assets/coding.svg";
import { HiCloudDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import data from "../../utils/data.json";

const Home = () => {
  return (
    <div className="text-gray-400 h-screen bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center h-full">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
            Hi, I am
          </p>
          <h4 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2">
            <span className="text-green-500">{data.profile.name}</span>
          </h4>
          <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl font-light mt-2">
            {data.profile.description}
          </h6>
          <div className="flex justify-center mt-4">
            <a
              className="inline-flex shadow-lg hover:shadow-md hover:border-gray-500 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-3xl text-lg"
              href={data.profile.resumeLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              Resume
              <HiCloudDownload className="text-3xl px-1 mx-auto inline-block" />
            </a>
          </div>
          <div className="flex space-x-3 mt-6">
            <a
              href={data.profile.socialLinks.github}
              className="text-gray-200"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal" />
            </a>
            <a
              href={data.profile.socialLinks.linkedin}
              className="text-gray-200"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal" />
            </a>
            <a
              href={data.profile.socialLinks.medium}
              className="text-gray-200"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <FaMedium className="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:max-h-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src={Coding}
            alt="Illustration of coding"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
