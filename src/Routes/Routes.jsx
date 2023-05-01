import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/places")
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'registration',
          element: <Registration></Registration>
        }
    ]
  },
]);

export default router;
