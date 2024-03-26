import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import ItemsList from "./components/ItemsList/ItemsList.tsx";
import CreateItem from "./components/CreateItem/CreateItem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/itemsList",
        element: <ItemsList />,
      },
      {
        path: "/createItem",
        element: <CreateItem />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
