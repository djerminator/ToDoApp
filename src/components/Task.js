import React from "react";
import { connect } from "react-redux";
import { TasklistIcon, TrashIcon } from "@primer/octicons-react";
import {
  Div,
  ButtonComplete,
  ButtonDelete
} from "../constants/appCss.constants";

const TaskComponent = (props) => {
  const { task, pending, id } = props;
  return (
    <Div>
      <span>{task}</span>
      <div style={{ float: "right" }}>
        {pending && (
          <ButtonComplete
            title="Task Completed"
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
