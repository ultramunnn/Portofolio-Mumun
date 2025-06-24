import React from "react";
import PropTypes from "prop-types";

const CardProjects = ({
  image,
  title,
  description,
  projectLink,
  techStacks = [],
}) => {
  return (
    <div className="group bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.10)]">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>

        {techStacks.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStacks.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-neutral-700 text-cyan-400 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          Open
        </a>
      </div>
    </div>
  );
};

CardProjects.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  techStacks: PropTypes.arrayOf(PropTypes.string),
};

export default CardProjects;
