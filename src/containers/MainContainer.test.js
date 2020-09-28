import React from "react";
import MainContainer from "./MainContainer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

//Jest setup start
Enzyme.configure({ adapter: new Adapter() });
//Jest setup End
const mockState = {
  toDo: { toDoArray: [{ task: "Morning Walk", id: 1, pending: true }] },
  button: { buttonState: "SHOW_ALL" },
  counter: { counter: 1 }
};
const mockStore = configureStore();
const store = mockStore(mockState);

describe("MainContainer", () => {
  let component;
  component = shallow(
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );

  it("should render Main Container ", () => {
    expect(component.length).toBe(1);
  });
  it("Rendered component to be MAIN container", () => {
    const inputElement = component.childAt(0);
    expect(inputElement.type()).toEqual(MainContainer);
  });
});
