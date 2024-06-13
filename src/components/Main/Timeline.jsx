import React from "react";
import data from "../../utils/data.json";

const Timeline = () => {
  return (
    <>
      <section className="antialiased bg-white text-gray-800 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-8">
              Education
            </h1>
            {data.timeline.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 mb-6 rounded-md shadow-md"
              >
                <span className="font-bold text-green-500 text-sm tracking-wide">
                  {edu.period}
                </span>
                <h2 className="text-2xl font-bold pt-1">{edu.institution}</h2>
                <p className="pt-1">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="antialiased bg-white text-gray-800 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-8">
              Experience
            </h1>
            {data.timeline.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 mb-6 rounded-md shadow-md"
              >
                <span className="font-bold text-green-500 text-sm tracking-wide">
                  {exp.period}
                </span>
                <h2 className="text-2xl font-bold pt-1">{exp.company}</h2>
                <p className="pt-1">{exp.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
