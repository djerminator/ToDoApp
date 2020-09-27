import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ChevronRightIcon, AlertIcon } from "@primer/octicons-react";
import { Input, Button } from "../constants/appCss.constants";
import * as actions from "../store/actions/action";
import { WrapperDiv, WrapperAlert } from "../constants/appCss.constants";

const ButtonSubmit = styled(Button)`
  width: auto;
  height: 30px;
  padding: 0;
  align-content: center;
`;

const WrapperAlertError = styled(WrapperAlert)`
  background: lightgrey;
`;
const InputContainer = (props) => {
  const [inputValue, inputValueHandler] = useState("");
  const [isError, setIsError] = useState(false);
  function onChangeHandler(event) {
    setIsError(false);
    if (event.keyCode === 13) {
      event.preventDefault();
      onSubmitHandler(inputValue);
      return 0;
    }
    inputValueHandler(event.target.value);
  }

  function beforeSubmitValidation(taskName) {
    if (!taskName) {
      return false;
    }
    let taskDoesNotExist = true;
    props.toDolist.forEach((item) => {
      if (item.task === taskName && item.pending) {
        taskDoesNotExist = false;
        setIsError(true);
        return taskDoesNotExist;
      }
    });
    return taskDoesNotExist;
  }

  function onSubmitHandler(taskName) {
    if (!beforeSubmitValidation(taskName)) {
      return 0;
    }
    inputValueHandler("");
    const newItem = { task: taskName, id: props.counter, pending: true };
    props.onSubmit(newItem);
    return 0;
  }
  return (
    <>
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
      {isError && (
        <WrapperDiv>
          <WrapperAlertError
            style={{ border: "2px solid red", background: "lightred" }}
          >
            <span>
              Task name already Exists!!! <br />
              Please enter a valid Task Name <AlertIcon size={20} />
            </span>
          </WrapperAlertError>
        </WrapperDiv>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  toDolist: state.toDo.todoArray
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newItem) => {
    dispatch(actions.onAddTask(newItem));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
