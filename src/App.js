import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div
      id="app"
      className="text-3xl font-bold text-green-800"
    >
      Netflix GPT
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
