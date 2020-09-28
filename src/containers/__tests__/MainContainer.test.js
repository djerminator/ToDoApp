import React from "react";
import MainContainer from "../MainContainer";
import Enzyme, { shallow } from "enzyme";
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

describe("MainContainer Test cases", () => {
  let component = null;
  afterEach(() => {
    jest.resetAllMocks();
  });
  component = shallow(
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
  const MainContainerComp = component.childAt(0);

  it("should render Main Container ", () => {
    expect(MainContainerComp.length).toBe(1);
  });

  it("Rendered component to be MAIN container", () => {
    expect(MainContainerComp.type()).toEqual(MainContainer);
  });
});
