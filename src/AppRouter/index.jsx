import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Login, SignUp, Home, About, Blog } from "../Pages";
import Protected from "../Layouts/AuthLayout";
import UserLayout from "../Layouts/UserLayout";
import { Page404 } from "../Components";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: (
            <Protected authentication={false}>
              <Login />
            </Protected>
          ),
        },
        {
          path: "/signup",
          element: (
            <Protected authentication={false}>
              <SignUp />
            </Protected>
          ),
        },
        {
          path: "/blog",
          element: (
            <Protected authentication={true}>
              <Blog />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "/admin",
      errorElement: <Page404 />,
      element: (
        <Protected authentication={true}>
          <UserLayout />
        </Protected>
      ),
      children: [
        { path: "/admin", element: <h1>Admin</h1> },
        {
          path: "/admin/account",
          element: <h1>Account</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
