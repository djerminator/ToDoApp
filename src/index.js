import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { rootReducer } from "./store/reducers/rootreducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);
// sagaMiddleware.run(rootReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
