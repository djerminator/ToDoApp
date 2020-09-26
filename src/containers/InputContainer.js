import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ChevronRightIcon } from "@primer/octicons-react";
import { Input, Button } from "../constatns/appCss.constants";

const ButtonSubmit = styled(Button)`
  width: auto;
  height: 30px;
  padding: 0;
  align-content: center;
`;
const InputContainer = (props) => {
  const [inputValue, inputValueHandler] = useState("");
  function onChangeHandler(event) {
    if (event.keyCode === 13) {
      console.log("hi");
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
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  toDolist: state.toDo.todoArray
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newItem) => {
    dispatch({ type: "ADD", payload: newItem });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
