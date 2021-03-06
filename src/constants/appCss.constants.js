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
  @media (max-width: 310px) {
    min-width: auto;
  }
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
  flex-flow: column wrap;
  height: auto;
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 3px;
  min-width: 500px;
  @media (max-width: 600px) {
    min-width: 300px;
  }
  @media (max-width: 350px) {
    min-width: 200px;
  }
`;

export const Div = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 1em;
  background: lightgrey;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-align: center;
  @media (max-width: 550px) {
    min-width: 100px;
  }
  @media (max-width: 350px) {
    min-width: auto;
  }
`;

export const WrapperAlert = styled.div`
  width: auto;
  max-width: 400px;
  padding: 10px;
  margin: 10px;
  display: flex;
  height: auto;
  background: lightblue;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Header = styled.header`
  width: 100%;
  background: palevioletred;
  justify-content: center;
  padding: 0.5rem;
  color: black;
  min-height: 1.5rem;
  font-size: 2rem;
  top: 0;
  margin: 0px;
`;

export const ButtonComplete = styled(Button)`
  margin: 3px;
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
  margin: 3px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  background: lightgrey;
  &:hover {
    color: red;
  }
`;
