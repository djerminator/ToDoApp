import Enzyme, { mount } from "enzyme";
import React from "react";
import InputContainer from "../InputContainer";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const mockState = {
  toDo: { toDoArray: [{ task: "Morning Walk", id: 1, pending: true }] },
  button: { buttonState: "SHOW_ALL" },
  counter: { counter: 1 }
};
const mockStore = configureStore();
const store = mockStore(mockState);

describe("InputContainer Test Cases", () => {
  let component = mount(
    <Provider store={store}>
      <InputContainer
        onSubmit={() => jest.fn()}
        toDolist={mockState.toDo.toDoArray}
        inputValue={""}
        isError={false}
      />
    </Provider>
  );
  const inputContainerComp = component.childAt(0);

  it("Rendered component to be Input Container", () => {
    expect(inputContainerComp.type()).toEqual(InputContainer);
  });

  it("should check the intial value of inputValue ", () => {
    expect(inputContainerComp.props().inputValue).toEqual("");
  });

  it("should check the intial value of isError ", () => {
    expect(inputContainerComp.props().isError).toEqual(false);
  });

  it("should have check for submit button", () => {
    expect(inputContainerComp.find("button").length).toEqual(1);
  });
});
