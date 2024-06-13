import React from "react";
import { FaGithub } from "react-icons/fa";
import Portfolio from "../../assets/portfolio.png";
import Watchify from "../../assets/watchify.png";
import data from "../../utils/data.json";

const imageMap = {
  Portfolio: Portfolio,
  Watchify: Watchify,
};

const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col items-center bg-white pt-10 pb-12 px-4 sm:px-16"
      id="projects"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-10">
        My Projects
      </h3>
      <div className="flex flex-col items-center space-y-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 w-11/12 md:h-80 xl:h-96 space-y-6 md:space-y-0 md:space-x-12 border border-transparent hover:border-gray-200 hover:shadow-lg"
          >
            <div className="md:w-1/2 w-full rounded-3xl md:h-full">
              <img
                src={imageMap[project.image]}
                alt={`${project.title} screenshot`}
                className="rounded-xl sm:rounded-3xl w-full md:w-auto h-full shadow-lg object-cover"
              />
            </div>
            <div className="flex w-full md:w-1/2 flex-col items-start space-y-6 md:space-y-6 xl:space-y-12 px-4 sm:px-0">
              <div className="flex flex-col space-y-4 md:space-y-5">
                <h3 className="text-gray-900 text-xl sm:text-2xl md:text-2xl xl:text-4xl font-bold line-clamp-1">
                  {project.title}
                </h3>
                <p className="md:text-lg xl:text-xl font-normal line-clamp-2 sm:line-clamp-3 text-gray-500">
                  {project.description}
                </p>
              </div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-5 py-4 md:py-3 md:px-4 xl:py-4 xl:px-6 rounded-xl text-base md:text-base xl:text-lg font-normal shadow-xl hover:bg-gray-900 hover:text-white focus:outline-none"
                aria-label={`See ${project.title} live`}
              >
                See Live
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href={data.profile.socialLinks.github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center shadow-lg bg-gray-50 hover:bg-gray-100 md:h-20 px-6 py-5 md:px-8 md:py-6 rounded-3xl text-gray-500 space-x-4 mt-12 focus:outline-none text-base md:text-lg border border-transparent hover:border-gray-200 cursor-pointer"
        aria-label="GitHub"
      >
        <FaGithub className="h-7 md:h-10" />
        <p>See More</p>
      </a>
    </div>
  );
};

export default ProjectsPage;
