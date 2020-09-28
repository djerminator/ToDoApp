import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import App from "../App";

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

describe("App Test cases", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  ).dive();

  it("should render component", () => {
    expect(wrapper.length).toBe(1);
  });
});
