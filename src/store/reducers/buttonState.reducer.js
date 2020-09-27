import * as actionTypes from "../actions/actionTypes";
const initialState = {
  buttonState: actionTypes.SHOW_ALL
};

const buttonStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALL:
      return {
        buttonState: actionTypes.SHOW_ALL
      };
    case actionTypes.SHOW_ACTIVE:
      return {
        buttonState: actionTypes.SHOW_ACTIVE
      };
    case actionTypes.SHOW_COMPLETED:
      return {
        buttonState: actionTypes.SHOW_COMPLETED
      };
    default:
      return state;
  }
};

export default buttonStateReducer;
