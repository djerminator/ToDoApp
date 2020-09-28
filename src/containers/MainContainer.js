import React from "react";
import { connect } from "react-redux";
import { SmileyIcon } from "@primer/octicons-react";
import { getTasksOfButtonState } from "./util/containers.util";
import InputContainer from "./InputContainer";
import { WrapperAlert, Header } from "../constants/appCss.constants";
import { Tasks } from "./Tasks";
import ButtonsBar from "./ButtonsBar";

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
      <Header>Welcome to Task Tracker</Header>
      <InputContainer />
      {!pendingTasks.length && (
        <WrapperAlert>
          <span>
            Relax !!! You have no pending tasks <SmileyIcon size={20} />
          </span>
        </WrapperAlert>
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
