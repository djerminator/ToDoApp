import * as actionTypes from "./actionTypes";
export const onAddInitiateTask = (newItem) => {
  return { type: actionTypes.ADD_INITIATE, payload: newItem };
};
export const onAddTask = (payload) => {
  return { type: actionTypes.ADD, payload };
};
