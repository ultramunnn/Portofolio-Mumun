import React from "react";

const CardSkills = ({ skill }) => {
  return (
    <div className="group bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
      <div className="w-16 h-16 mb-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
        <img
          src={skill.icon_url}
          alt={skill.name}
          className="max-w-full max-h-full object-contain mix-blend-normal"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
        {skill.name}
      </h3>
      <span className="text-sm text-gray-400">{skill.level}</span>
    </div>
  );
};

export default CardSkills;
