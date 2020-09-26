import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import toDoReducer from "./todo.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  toDo: toDoReducer
});
