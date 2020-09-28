import React from "react";
import { Button } from "../constants/appCss.constants";

export const ButtonCreator = (
  buttonDisplayName,
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
      {buttonDisplayName} ({noOfTasks})
    </Button>
  );
};
