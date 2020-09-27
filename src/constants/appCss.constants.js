import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: auto;
  min-width: 220px;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 140px;
  cursor: pointer;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  height: auto;
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 3px;
`;

export const Div = styled.div`
  padding: 5px;
  margin: 5px;
  font-size: 1em;
  background: lightgrey;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 40px;
  text-align: center;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const WrapperAlert = styled.div`
  width: auto;
  max-width: 400px;
  background: lightblue;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
  display: flex;
  height: auto;
`;

export const ButtonComplete = styled(Button)`
  margin: 5px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  background: lightgrey;
  &:hover {
    color: blue;
  }
`;

export const ButtonDelete = styled(Button)`
  margin: 5px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  background: lightgrey;
  &:hover {
    color: red;
  }
`;
