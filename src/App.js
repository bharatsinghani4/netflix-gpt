import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { appStore } from "./store/appStore";

import Body from "./components/Body";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={appStore}>
    <Body />
  </Provider>
  // </React.StrictMode>
);
