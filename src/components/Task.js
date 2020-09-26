import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { TasklistIcon, TrashIcon } from "@primer/octicons-react";
import { Button, Div } from "../constatns/appCss.constants";

const ButtonComplete = styled(Button)`
  margin: 5px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  background: lightgrey;
  &:hover {
    background: blue;
    color: black;
  }
`;

const ButtonDelete = styled(Button)`
  margin: 5px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  background: lightgrey;
  &:hover {
    background: red;
    color: black;
  }
`;

const TaskComponent = (props) => {
  const { task, pending, id } = props;
  return (
    <Div>
      <span>{task}</span>
      <div style={{ float: "right" }}>
        {pending && (
          <ButtonComplete
            title="Mark Complete"
            onClick={() => props.onCompleted(id)}
          >
            <TasklistIcon size={20} />
          </ButtonComplete>
        )}
        <ButtonDelete title="Delete Task" onClick={() => props.onDelete(id)}>
          <TrashIcon size={20} />
        </ButtonDelete>
      </div>
    </Div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  toDolist: state.toDo.todoArray
});
const mapDispatchToProps = (dispatch) => ({
  onCompleted: (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  },
  onDelete: (id) => {
    dispatch({ type: "DELETE", payload: id });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);
