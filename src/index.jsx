import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import { getFirestoreApp } from "./firebase/Config";

getFirestoreApp();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
