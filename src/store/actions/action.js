import * as actionTypes from "./actionTypes";
export const onAddTask = (newItem) => {
  return { type: actionTypes.ADD_INITIATE, payload: newItem };
};
