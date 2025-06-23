import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSkills } from "../services/skillsService";
import BlobImage from "../assets/blob_about.svg";
import CardSkills from "../components/CardSkills";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const allSkills = await getSkills();
        setSkills(allSkills);
        // Extract unique categories from skills
        const uniqueCategories = [
          ...new Set(allSkills.map((skill) => skill.category)),
        ].sort();
        setCategories(["All", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? groupedSkills
      : { [selectedCategory]: groupedSkills[selectedCategory] || [] };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Blob Background */}
      <img
        src={BlobImage}
        alt="Background Blob"
        className="absolute top-0 left-0 w-2/3 md:w-1/2 opacity-50 pointer-events-none"
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
          My Skills
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {Object.entries(filteredSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => (
                  <CardSkills key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
