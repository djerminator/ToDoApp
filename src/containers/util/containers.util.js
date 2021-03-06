import * as actionTypes from "../../store/actions/actionTypes";
//This function returns Tasks to be displayed according to button state
export function getTasksOfButtonState(buttonState, toDolist, pendingList) {
  switch (buttonState) {
    case actionTypes.SHOW_ALL:
      return toDolist;
    case actionTypes.SHOW_ACTIVE:
      return pendingList;
    case actionTypes.SHOW_COMPLETED: {
      const showTasks = toDolist.filter((task) => !task.pending);
      return showTasks;
    }
    default:
      return toDolist;
  }
}
