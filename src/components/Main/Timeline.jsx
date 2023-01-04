import React from "react";

function Timeline() {
  return (
    <>
      <div className="antialiased bg-white text-gray-800">
        <div className="relative container mx-auto px-12 flex flex-col space-y-8">
          <div className="relative z-10">
            <h1 className="text-3xl py-10 font-medium title-font text-gray-900 mb-3 text-center">
              Education
            </h1>
            <div className="bg-white p-6 rounded-md shadow-md">
              <span className="font-bold text-green-500 text-sm tracking-wide">
                2015 - 2019
              </span>
              <h1 className="text-2xl font-bold pt-1">
                Jaypee University of Information Technology
              </h1>
              <p className="pt-1">
                Bachelor of Technology - Computer Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="antialiased bg-white text-gray-800">
        <div className="relative container mx-auto px-12 flex flex-col space-y-8">
          <div className="relative z-10">
            <h1 className="text-3xl py-10 font-medium title-font text-gray-900 mb-3 text-center">
              Experience
            </h1>
            <div className="timeline-container">
              <div className="bg-white p-6 mb-3 rounded-md shadow-md">
                <span className="font-bold text-green-500 text-sm tracking-wide">
                  Jan 2022 - Present
                </span>
                <h1 className="text-2xl font-bold pt-1">Publicis Sapient</h1>
                <p className="pt-1">Associate, Technology L2</p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-md">
                <span className="font-bold text-green-500 text-sm tracking-wide">
                  Jan 2019 - Dec 2021
                </span>
                <h1 className="text-2xl font-bold pt-1">Infosys</h1>
                <p className="pt-1">Systems Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
