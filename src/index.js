import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { getFirestoreApp } from "./firebase/Config";

getFirestoreApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
