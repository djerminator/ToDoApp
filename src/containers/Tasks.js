import React from "react";
import styled from "styled-components";
import { Wrapper } from "../constants/appCss.constants";
import TaskComponent from "../components/Task";

export const Hr = styled.hr`
  min-width: 500px;
  @media (max-width: 530px) {
    min-width: 300px;
  }
  @media (max-width: 330px) {
    min-width: 160px;
  }
`;

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
        <Hr />
      )}
    </>
  );
};
