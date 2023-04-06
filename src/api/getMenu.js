import axios from "axios";

export const getMenu = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/menus/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
};
