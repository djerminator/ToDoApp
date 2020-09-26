import React, { useState } from "react";
import { connect } from "react-redux";
import InputContainer from "./InputContainer";
import { Tasks } from "./Tasks";
import ButtonsBar from "./ButtonsBar";
import { SmileyIcon } from "@primer/octicons-react";
import { WrapperDiv, WrapperAlert } from "../constatns/appCss.constants";
const MainContainer = (props) => {
  const [buttonState, setbuttonState] = useState("ALL");
  let showTasks = props.toDolist;
  const pendingTasks = props.toDolist.filter((task) => {
    return task.pending;
  });
  switch (buttonState) {
    case "ALL": {
      showTasks = props.toDolist;
      break;
    }
    case "ACTIVE": {
      showTasks = pendingTasks;
      break;
    }
    case "COMPLETED": {
      showTasks = props.toDolist.filter((task) => {
        return !task.pending;
      });
      break;
    }
    default:
      showTasks = props.toDolist;
  }

  return (
    <>
      <InputContainer />
      {!pendingTasks.length && (
        <WrapperDiv>
          <WrapperAlert>
            <span>
              Relax !!! You have no pending tasks <SmileyIcon size={20} />
            </span>
          </WrapperAlert>
        </WrapperDiv>
      )}
      <Tasks tasks={showTasks} />
      <ButtonsBar
        setButtonHandler={setbuttonState}
        currentState={buttonState}
      />
    </>
  );
};

const MapStateToProps = (state) => {
  return { toDolist: state.toDo.todoArray };
};
export default connect(MapStateToProps)(MainContainer);
