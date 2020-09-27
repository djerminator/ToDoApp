import React from "react";
import { Wrapper } from "../constants/appCss.constants";
import TaskComponent from "../components/Task";

export const Tasks = (props) => {
  return (
    <>
      {props.tasks.length ? (
        <Wrapper>
          {props.tasks.map((item) => (
            <TaskComponent key={item.id} {...item} />
          ))}
        </Wrapper>
      ) : (
        <hr width="500" />
      )}
    </>
  );
};
