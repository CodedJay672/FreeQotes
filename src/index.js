import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Path: src\App.js
// Compare this snippet from src\App.js:
// import React, { Component }  from "react";
