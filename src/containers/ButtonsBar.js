import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import { ButtonCreator } from "../components/ButtonCreator";

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
