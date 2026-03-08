import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          Designed & Built with ❤️ by{" "}
          <span className="text-green-500">@UtkarshKatiyar</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/UtkarshK95"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh-katiyar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
