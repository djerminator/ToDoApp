import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ChevronRightIcon } from "@primer/octicons-react";
import { Input, Button } from "../constants/appCss.constants";
import * as actions from "../store/actions/action";
import { ErrorNotification } from "../components/ErrorNotify";
const ButtonSubmit = styled(Button)`
  width: auto;
  height: 30px;
  padding: 0;
  align-content: center;
  @media (max-width: 350px) {
    min-width: 100px;
  }
`;

const InputContainer = (props) => {
  const [inputValue, inputValueHandler] = useState("");
  const [isError, setIsError] = useState(false);
  function onChangeHandler(event) {
    //This function setsErrorPopup to hide
    setIsError(false);
    inputValueHandler(event.target.value);
    if (event.keyCode === 13) {
      //KeyCode 13:Enter Key, Submit on Enter Key Press
      event.preventDefault();
      onSubmitHandler(inputValue);
    }
  }

  function beforeSubmitValidation(taskName) {
    //Validates the taskName already Exists from active Tasks
    if (!taskName) {
      //return if taskName is empty
      return false;
    }
    let taskDoesNotExist = true;

    props.toDolist.forEach((item) => {
      if (item.task === taskName && item.pending) {
        taskDoesNotExist = false;
        setIsError(true); //display error pop up
        return taskDoesNotExist;
      }
    });
    return taskDoesNotExist;
  }

  function onSubmitHandler(taskName) {
    if (!beforeSubmitValidation(taskName)) {
      //Do Nothing if validation fails
      return;
    }
    const newItem = { task: taskName, id: props.counter, pending: true };
    inputValueHandler(""); //Set Input Field to empty before submission
    props.onSubmit(newItem); //Dispatch action
  }
  return (
    <>
      <div>
        <Input
          onChange={(event) => onChangeHandler(event)}
          onKeyUp={(event) => onChangeHandler(event)}
          value={inputValue}
          placeholder="Enter the task name here"
        />
        <ButtonSubmit
          title="Click to save"
          onClick={() => onSubmitHandler(inputValue)}
        >
          <ChevronRightIcon size={20} />
        </ButtonSubmit>
      </div>
      {isError && <ErrorNotification setError={setIsError} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  toDolist: state.toDo.todoArray
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newItem) => {
    dispatch(actions.onAddInitiateTask(newItem));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
