import React from "react";
import styled from "styled-components";
import { AlertIcon, XCircleIcon } from "@primer/octicons-react";
import { Button } from "../constants/appCss.constants";
import { WrapperDiv, WrapperAlert } from "../constants/appCss.constants";

const WrapperAlertError = styled(WrapperAlert)`
  background: lightgrey;
  border: "2px solid red";
`;
const CloseErrorButton = styled(Button)`
  width: auto;
  padding: 2px;
  margin: 0px 0px 0px 5px;
  align-content: center;
  color: black;
  border: 0px solid black;
  background: lightgray;
  display: inline-block;
`;

export const ErrorNotification = (props) => (
  <WrapperDiv>
    <WrapperAlertError title="Error Notification">
      <span>
        <AlertIcon size={20} />
        Task Name already exists in "Active Tasks"
      </span>
      <CloseErrorButton
        onClick={() => props.setError(false)}
        title="Close error Notification"
      >
        <XCircleIcon size={16} />
      </CloseErrorButton>
    </WrapperAlertError>
  </WrapperDiv>
);
