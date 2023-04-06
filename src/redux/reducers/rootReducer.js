import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  cart: cartReducer,
});

export default rootReducer;