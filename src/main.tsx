import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./root/root";
import ErrorPage from "./error-page";
import BakersCalc from "./bakers-calc";
import Home from "./home";
import SuperSecretPage from "./super-secret-page";
import WordGame from "./wordGame";

const router = createHashRouter([
  {
    path: "/*",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bakers-calculator",
        element: <BakersCalc />,
      },
      {
        path: "word-game",
        element: <WordGame />,
      },
      {
        path: "super-secret",
        element: <SuperSecretPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
