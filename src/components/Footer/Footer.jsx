import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ href, Icon, label }) => {
  return (
    <a
      href={href}
      className="ml-3 text-gray-200"
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon className="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-200 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4 hover:text-teal">
          Designed & Built by{" "}
          <span className="text-green-500">@UtkarshKatiyar</span>
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialLink
            href="https://github.com/UtkarshK95"
            Icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://twitter.com/UtkarshK07"
            Icon={FaTwitter}
            label="Twitter"
          />
          <SocialLink
            href="https://instagram.com/utkarsh.katiyar07"
            Icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="https://www.linkedin.com/in/utkarsh-katiyar/"
            Icon={FaLinkedin}
            label="LinkedIn"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
