import { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Portfolio from "../../assets/Portfolio.png";
import MovieBee from "../../assets/MovieBee.png";
import NutriMate from "../../assets/NutriMate.png";
import ShotSecure from "../../assets/ShotSecure.png";
import Pokedex from "../../assets/Pokedex.png";
import SwiftMemo from "../../assets/SwiftMemo.png";
import ReactNanoSkeleton from "../../assets/ReactNanoSkeleton.png";
import data from "../../utils/data.json";

const imageMap = {
  Portfolio,
  MovieBee,
  NutriMate,
  ShotSecure,
  Pokedex,
  SwiftMemo,
  ReactNanoSkeleton,
};

const ProjectCard = ({ project, imageMap }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div className="group flex flex-col md:flex-row items-center gap-6 bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors duration-200 rounded-2xl p-6">
      {imageMap[project.image] ? (
        <div className="md:w-2/5 w-full flex-shrink-0">
          <img
            src={imageMap[project.image]}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="rounded-xl w-full h-48 md:h-52 object-contain shadow-lg border border-gray-700 group-hover:border-green-500 transition-colors duration-200"
          />
        </div>
      ) : null}
      <div className={`flex flex-col gap-3 ${imageMap[project.image] ? "md:w-3/5" : "w-full"}`}>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p ref={descRef} className={`text-gray-400 text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>
        {(isClamped || expanded) && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="self-start text-xs text-green-400 hover:text-green-300 transition-colors duration-150"
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}
        {project.techStack && (
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-gray-700 border border-gray-600 text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3 mt-1">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} repo`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-300 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-4 py-1.5 rounded-lg transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
            Repo
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live`}
            className="inline-flex items-center gap-1.5 text-sm text-white bg-green-600 hover:bg-green-500 px-4 py-1.5 rounded-lg transition-colors duration-200"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute top-10 right-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-10">
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-1 text-center">What I've built</p>
        <h1 className="text-3xl font-bold text-white mb-10 text-center">Projects</h1>

        <div className="flex flex-col gap-6">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} imageMap={imageMap} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={data.profile.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 text-sm text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-green-500 px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            See More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
