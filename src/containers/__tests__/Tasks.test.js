import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { Tasks } from "../Tasks";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
Enzyme.configure({ adapter: new Adapter() });

describe("MainContainer", () => {
  const toDoArray = [{ task: "Morning Walk", id: 1, pending: true }];
  const mockState = {
    toDo: { toDoArray: [{ task: "Morning Walk", id: 1, pending: true }] },
    button: { buttonState: "SHOW_ALL" },
    counter: { counter: 1 }
  };
  const mockStore = configureStore();
  const store = mockStore(mockState);
  let tasksComponent = mount(
    <Provider store={store}>
      <Tasks tasks={toDoArray} />
    </Provider>
  );

  it("should check the Component present or not ", () => {
    expect(tasksComponent.length).toEqual(1);
  });

  it("hr should not present when tasks are passed", () => {
    expect(tasksComponent.find("hr").length).toEqual(0);
  });

  it("TaskComponent should be present when tasks are passed", () => {
    expect(tasksComponent.find("TaskComponent").length).toEqual(1);
  });
});
describe("TasksContainer when tasks are not passed", () => {
  it(" hr should be present when tasks are passed", () => {
    let component = shallow(<Tasks tasks={[]} />);
    expect(component.find("hr").length).toEqual(1);
  });
});
