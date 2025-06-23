const API_URL = "http://localhost:5000/api";

export const getSkills = async () => {
  try {
    const response = await fetch(`${API_URL}/skills`);
    if (!response.ok) {
      throw new Error("Failed to fetch skills");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

export const addSkill = async (skill) => {
  try {
    const response = await fetch(`${API_URL}/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      throw new Error("Failed to add skill");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding skill:", error);
    throw error;
  }
};
