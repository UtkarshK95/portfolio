import React from "react";
import ProjImg from "../../assets/images/coming_soon.jpeg";

function ProjectsPage() {
  return (
    <div class="antialiased bg-gray-100">
      <div class="md:h-full flex items-center text-gray-600">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-12">
            <h5 class="text-base md:text-lg text-grey-700 mb-1">
              Some of my recent
            </h5>
            <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">
              PROJECTS
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={ProjImg}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="text-2xl font-semibold mb-3">Project 1</h1>
                  <p class="leading-relaxed mb-3">Project 1 Description</p>
                  <div class="pb-10">
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-left"
                      href="/#"
                    >
                      Demo
                    </a>
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-right"
                      href="/#"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={ProjImg}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="text-2xl font-semibold mb-3">Project 2</h1>
                  <p class="leading-relaxed mb-3">Project 2 Description</p>
                  <div class="pb-10">
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-left"
                      href="/#"
                    >
                      Demo
                    </a>
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-right"
                      href="/#"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={ProjImg}
                  alt="blog"
                />
                <div class="p-6 ">
                  <h1 class="text-2xl font-semibold mb-3">Project 3</h1>
                  <p class="leading-relaxed mb-3">Project 3 Description</p>
                  <div class="pb-10">
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-left"
                      href="/#"
                    >
                      Demo
                    </a>
                    <a
                      class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full float-right"
                      href="/#"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
