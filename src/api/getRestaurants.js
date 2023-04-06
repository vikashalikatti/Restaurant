import axios from "axios";

export const getRestaurants = async () => {
  try {
    const response = await axios.get("http://localhost:5000/restaurants");
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
