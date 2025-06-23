import p1Image from "../assets/p1.png";

const API_URL = "http://localhost:5000/api";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const addProject = async (project) => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error("Failed to add project");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

// For development/testing purposes, we'll include some mock data
export const mockProjects = [
  {
    id: 1,
    image: p1Image,
    title: "Project 1",
    description:
      "Description for Project 1. This is a sample project description that showcases the project details.",
    projectLink: "https://project1.example.com",
  },
  {
    id: 3,
    image: p1Image,
    title: "Project 2",
    description:
      "Description for Project 2. Another sample project with its own unique description.",
    projectLink: "https://project2.example.com",
  },
  {
    id: 4,
    image: p1Image,
    title: "Project 2",
    description:
      "Description for Project 2. Another sample project with its own unique description.",
    projectLink: "https://project2.example.com",
  },
  {
    id: 5,
    image: p1Image,
    title: "Project 2",
    description:
      "Description for Project 2. Another sample project with its own unique description.",
    projectLink: "https://project2.example.com",
  },
  {
    id: 2,
    image: p1Image,
    title: "Project 2",
    description:
      "Description for Project 2. Another sample project with its own unique description.",
    projectLink: "https://project2.example.com",
  },
  // Add more mock projects as needed
];

export default {
  getProjects,
  addProject,
  mockProjects,
};
