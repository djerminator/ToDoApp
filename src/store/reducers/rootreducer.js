import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import toDoReducer from "./todo.reducer";
import buttonStateReducer from "./buttonState.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  toDo: toDoReducer,
  button: buttonStateReducer
});
