import React from "react";
import { connect } from "react-redux";
import { Button } from "../constatns/appCss.constants";

const ButtonsBar = (props) => {
  return (
    <>
      <Button
        onClick={() => props.setButtonHandler("ALL")}
        disabled={props.currentState === "ALL"}
        style={
          props.currentState === "ALL"
            ? { cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
      >
        All
      </Button>
      <Button
        onClick={() => props.setButtonHandler("ACTIVE")}
        disabled={props.currentState === "ACTIVE"}
        style={
          props.currentState === "ACTIVE"
            ? { cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
      >
        Active
      </Button>
      <Button
        onClick={() => props.setButtonHandler("COMPLETED")}
        disabled={props.currentState === "COMPLETED"}
        style={
          props.currentState === "COMPLETED"
            ? { cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
      >
        Completed
      </Button>
    </>
  );
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
export default connect(null, mapDispatchToProps)(ButtonsBar);
