import React from "react";

function Timeline() {
  return (
    <div>
      <div class="antialiased bg-white text-gray-800">
        <div class="relative container mx-auto px-12 flex flex-col space-y-8">
          <div class="relative z-10">
            <h1 class="text-3xl py-10 font-medium title-font text-gray-900 mb-3 text-center">
              Education
            </h1>
            <div class="bg-white p-6 rounded-md shadow-md">
              <span class="font-bold text-green-500 text-sm tracking-wide">
                2015 - 2019
              </span>
              <h1 class="text-2xl font-bold pt-1">
                Jaypee University of Information Technology
              </h1>
              <p class="pt-1">
                Bachelor of Technology - Computer Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="antialiased bg-white text-gray-800">
        <div class="relative container mx-auto px-12 flex flex-col space-y-8">
          <div class="relative z-10">
            <h1 class="text-3xl py-10 font-medium title-font text-gray-900 mb-3 text-center">
              Experience
            </h1>
            <div class="timeline-container">
              <div class="timeline-pointer" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-md">
                <span class="font-bold text-green-500 text-sm tracking-wide">
                  2019 - Present
                </span>
                <h1 class="text-2xl font-bold pt-1">Infosys</h1>
                <p class="pt-1">Systems Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
