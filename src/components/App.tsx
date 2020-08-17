import React from "react";
import { Provider } from "react-redux";

import store from "../redux";
import DefaultComponent from "./DefaultComponent";

function App() {
  return (
    <Provider store={store}>
      <DefaultComponent />
    </Provider>
  );
}

// TODO:
// pre-commit linting?
// persist
// router
// api manager + endpoints
// serialization
// dotenv?

export default App;
