import React from "react";
import { connect } from "react-redux";
import { SmileyIcon } from "@primer/octicons-react";
import InputContainer from "./InputContainer";
import { Tasks } from "./Tasks";
import ButtonsBar from "./ButtonsBar";
import { WrapperDiv, WrapperAlert } from "../constants/appCss.constants";
import { getTasksOfButtonState } from "./util/containers.util";
const MainContainer = (props) => {
  const pendingTasks = props.toDolist.filter((task) => {
    return task.pending;
  });
  const tasksToBeDisplayed = getTasksOfButtonState(
    props.buttonState,
    props.toDolist,
    pendingTasks
  );
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
      <Tasks tasks={tasksToBeDisplayed} />
      <ButtonsBar
        totalTask={props.toDolist.length}
        activeTask={pendingTasks.length}
      />
    </>
  );
};

const MapStateToProps = (state) => {
  return {
    toDolist: state.toDo.todoArray,
    buttonState: state.button.buttonState
  };
};
export default connect(MapStateToProps)(MainContainer);