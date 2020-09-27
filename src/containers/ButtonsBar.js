import React from "react";
import { connect } from "react-redux";
import { Button } from "../constants/appCss.constants";
import * as actionTypes from "../store/actions/actionTypes";

const ButtonCreator = (
  displayName,
  noOfTasks,
  onClickFunctionHandler,
  buttonType,
  appButtonState
) => {
  return (
    <Button
      onClick={onClickFunctionHandler}
      disabled={appButtonState === buttonType}
      style={
        appButtonState === buttonType
          ? { cursor: "not-allowed", background: "gray", color: "white" }
          : { cursor: "pointer", background: "white", color: "palevioletred" }
      }
    >
      {displayName} ({noOfTasks})
    </Button>
  );
};

const ButtonsBar = (props) => {
  const { totalTask, activeTask } = props;
  const completedTask = totalTask - activeTask;

  return (
    <>
      {ButtonCreator(
        "ALL",
        totalTask,
        props.onAll,
        actionTypes.SHOW_ALL,
        props.buttonState
      )}
      {ButtonCreator(
        "Active",
        activeTask,
        props.onActive,
        actionTypes.SHOW_ACTIVE,
        props.buttonState
      )}
      {ButtonCreator(
        "Completed",
        completedTask,
        props.onCompleted,
        actionTypes.SHOW_COMPLETED,
        props.buttonState
      )}
    </>
  );
};

const MapStateToProps = (state) => {
  return {
    buttonState: state.button.buttonState
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAll: () => {
    dispatch({ type: "SHOW_ALL" });
  },
  onActive: () => {
    dispatch({ type: "SHOW_ACTIVE" });
  },
  onCompleted: () => {
    dispatch({ type: "SHOW_COMPLETED" });
  }
});
export default connect(MapStateToProps, mapDispatchToProps)(ButtonsBar);
