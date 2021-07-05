import React from "react";

function ProjectsSection() {
  return (
    <div>
      <div class="min-h-screen bg-cyan-700 flex items-center justify-center">
        {/* <!-- card goes here --> */}
        <div class="relative w-400">
          {/* <!-- yellow background --> */}
          <div class="absolute -right-4 -bottom-4 bg-teal-300 h-full w-full rounded-xl"></div>

          <div class="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
            {/* <!-- yellow line --> */}
            <div class="h-2 w-20 bg-teal-300"></div>

            {/* <!-- percentage --> */}
            <div class="text-5xl font-extrabold text-white">PROJECTS</div>

            {/* <!-- description --> */}
            <p class="leading-snug text-gray-400">
              Pagespeed Insights Score. Delight your users and improve your SERP
              positioning.
            </p>

            {/* <!-- learn more --> */}
            <a
              href="/projects"
              class="block text-teal-300 font-bold tracking-wide flex"
            >
              <span>Go to projects</span>
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
