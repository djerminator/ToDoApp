import * as actionTypes from "../actions/actionTypes";
const initialState = {
  todoArray: []
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        todoArray: state.todoArray.concat(action.payload)
      };
    case actionTypes.COMPLETE:
      return {
        ...state,
        todoArray: state.todoArray.map((task, i) =>
          task.id === action.payload ? { ...task, pending: false } : task
        )
      };
    case actionTypes.DELETE:
      return {
        ...state,
        todoArray: state.todoArray.filter((task) => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default toDoReducer;
