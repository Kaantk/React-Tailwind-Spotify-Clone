import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "~/assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "~/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
