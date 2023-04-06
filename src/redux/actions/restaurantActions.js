import { getRestaurants } from "../../api/getRestaurants";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";

export const fetchRestaurants = () => async (dispatch) => {
  try {
    const restaurants = await getRestaurants();
    dispatch({ type: FETCH_RESTAURANTS, payload: restaurants });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
};
