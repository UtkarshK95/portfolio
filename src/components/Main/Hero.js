import React from "react";
import Coding from "../../assets/coding.svg";
import { HiCloudDownload } from "react-icons/hi";

function Hero() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
            Hi, I am
          </p>
          <br />
          <h4 className=" md:flex text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            {" "}
            <span className="text-green-500">Utkarsh Katiyar</span>
          </h4>
          <br />
          <h6 className="text-base text- md:text-lg lg:text-xl xl:text-2xl font-light">
            JavaScript | Front End Developer
          </h6>
          <br />
          <div className="flex justify-center">
            <a
              className="inline-flex shadow-lg hover:shadow-md hover:border-gray-500 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-3xl text-lg"
              href="#contact"
            >
              Resume{"  "}
              <HiCloudDownload className="text-3xl px-1 mx-auto inline-block" />
            </a>
          </div>{" "}
          <br />
          <span className="inline-flex  border-0 py-2 px-3 ">
            <a
              href="https://github.com/UtkarshK95"
              class="text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/UtkarshK07"
              class="ml-3 text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/utkarsh.katiyar07"
              class="ml-3 text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-katiyar/"
              class="ml-3 text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src={Coding}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
