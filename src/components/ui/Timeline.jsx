import React from "react";
import data from "../../utils/data.json";

const TimelineCard = ({ period, title, subtitle }) => (
  <div className="bg-gray-800 border border-gray-700 p-5 rounded-xl hover:border-green-500 transition-colors duration-200">
    <span className="font-semibold text-green-500 text-xs tracking-widest uppercase">{period}</span>
    <h2 className="text-white text-lg font-bold mt-1">{title}</h2>
    <p className="text-gray-400 text-sm mt-0.5">{subtitle}</p>
  </div>
);

const Timeline = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-700 pb-1">
        Education
      </h2>
      <div className="flex flex-col gap-4">
        {data.timeline.education.map((edu, i) => (
          <TimelineCard key={i} period={edu.period} title={edu.institution} subtitle={edu.degree} />
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-700 pb-1">
        Experience
      </h2>
      <div className="flex flex-col gap-4">
        {data.timeline.experience.map((exp, i) => (
          <TimelineCard key={i} period={exp.period} title={exp.company} subtitle={exp.position} />
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
