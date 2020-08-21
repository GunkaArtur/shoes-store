import { combineReducers } from "redux";
import { card } from "./cardReducer";
import { items } from "./itemsReducer";

export const rootReducer = combineReducers({
  items: items,
  card: card
});
