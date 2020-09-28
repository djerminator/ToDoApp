import Enzyme, { mount } from "enzyme";
import React from "react";
import ButtonsBar from "../ButtonsBar";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });
const mockState = {
  button: { buttonState: "SHOW_ALL" }
};
const mockStore = configureStore();
const store = mockStore(mockState);

describe("MainContainer", () => {
  let component = mount(
    <Provider store={store}>
      <ButtonsBar />
    </Provider>
  );
  const buttonBarComponent = component.childAt(0);

  it("should check the Component present or not ", () => {
    expect(buttonBarComponent.length).toEqual(1);
    expect(buttonBarComponent.type()).toEqual(ButtonsBar);
  });

  it("should have 3 buttons for buttonbar", () => {
    expect(buttonBarComponent.find("button").length).toEqual(3);
  });
});
