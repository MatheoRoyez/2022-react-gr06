import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/fluvius-styles.css";
import "./basic.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { User_Provider } from "./context/user-context";

const cointainer = document.getElementById("root");
const root = createRoot(cointainer);
root.render(
  <User_Provider>
    <App />
  </User_Provider>
);
reportWebVitals();
