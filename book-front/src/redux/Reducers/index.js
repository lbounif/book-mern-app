import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import filtreReducer from "./filterReducer";

const rootReducer = combineReducers({
  filter: filtreReducer,
  book: bookReducer,
});

export default rootReducer;
