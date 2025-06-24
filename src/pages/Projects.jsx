import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardProjects from "../components/CardProjects";
import { getProjects } from "../services/projectsService";
import BlobImage from "../assets/blob_project.svg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        // Map the backend data to match the component props
        const mappedProjects = data.map((project) => ({
          ...project,
          image: project.image_url, // Map image_url to image
          projectLink: project.project_url, // Map project_url to projectLink
        }));
        setProjects(mappedProjects);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error("Falling back to data:", err);

        setLoading(false);
        setError("Failed to fetch projects. Showing data.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Blob Background */}
      <img
        src={BlobImage}
        alt="Background Blob"
        className="absolute w-full h-full object-cover opacity-50 pointer-events-none"
      />

      {/* Back Button */}
      <Link to="/" className="fixed top-4 right-4 md:top-8 md:right-8 z-50 p-2">
        <div className="relative w-5 h-5 md:w-6 md:h-8">
          <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform rotate-45 origin-bottom-left"></div>
          <div className="absolute w-1.5 md:w-2 h-5 md:h-6 bg-white transform -rotate-45 origin-top-left"></div>
        </div>
      </Link>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
          Projects
        </h1>

        {loading && (
          <div className="text-center text-xl">Loading projects...</div>
        )}

        {error && (
          <div className="text-red-500 text-center text-xl">{error}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <CardProjects
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              projectLink={project.projectLink}
              techStacks={project.techStacks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
