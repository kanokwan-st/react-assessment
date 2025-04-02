import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import Owner from "./pages/Owner";
import DefaultHome from "./pages/DefaultHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <DefaultHome />,
      },
      {
        path: "/userhome",
        element: <UserHome />,
      },
      {
        path: "/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/owner",
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
