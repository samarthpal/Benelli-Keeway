import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Pages from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
