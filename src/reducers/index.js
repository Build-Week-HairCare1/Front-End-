import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import { stylistReducer } from "./stylistReducer";

export default combineReducers({
  customerReducer,
  stylistReducer
});
