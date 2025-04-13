import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { appStore } from "./store/appStore";

import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <Body />
  </Provider>
);
