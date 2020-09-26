import React from "react";
import { Wrapper } from "../constatns/appCss.constants";
import TaskComponent from "../components/Task";
import "../styles.css";

export const Tasks = (props) => {
  return (
    <>
      {props.tasks.length ? (
        <Wrapper className="Tasks">
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
