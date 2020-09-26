import * as actionTypes from "../actions/actionTypes";
const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else {
    return state;
  }
};

export default counterReducer;
