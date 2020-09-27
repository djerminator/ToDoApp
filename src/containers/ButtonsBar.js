import React from "react";
import { connect } from "react-redux";
import { Button } from "../constants/appCss.constants";
import * as actionTypes from "../store/actions/actionTypes";

const ButtonsBar = (props) => {
  const { totalTask, activeTask } = props;
  const completedTask = totalTask - activeTask;
  return (
    <>
      <Button
        onClick={props.onAll}
        disabled={props.buttonState === actionTypes.SHOW_ALL}
        style={
          props.buttonState === actionTypes.SHOW_ALL
            ? { cursor: "not-allowed", background: "gray", color: "white" }
            : { cursor: "pointer", background: "white", color: "palevioletred" }
        }
      >
        All ({totalTask})
      </Button>
      <Button
        onClick={props.onActive}
        disabled={props.buttonState === actionTypes.SHOW_ACTIVE}
        style={
          props.buttonState === actionTypes.SHOW_ACTIVE
            ? { cursor: "not-allowed", background: "gray", color: "white" }
            : { cursor: "pointer", background: "white", color: "palevioletred" }
        }
      >
        Active ({activeTask})
      </Button>
      <Button
        onClick={props.onCompleted}
        disabled={props.buttonState === actionTypes.SHOW_COMPLETED}
        style={
          props.buttonState === actionTypes.SHOW_COMPLETED
            ? { cursor: "not-allowed", background: "gray", color: "white" }
            : { cursor: "pointer", background: "white", color: "palevioletred" }
        }
      >
        Completed ({completedTask})
      </Button>
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
