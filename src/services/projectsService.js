const API_URL = "http://localhost:5000/api";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const addProject = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "POST",
      body: formData, // FormData will handle the multipart/form-data content type
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

export const deleteProject = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

export default {
  getProjects,
  addProject,
  deleteProject,
};
