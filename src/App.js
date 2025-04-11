import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";

const AppLayout = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
