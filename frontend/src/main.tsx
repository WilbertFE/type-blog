import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Login } from "./pages/Login.tsx";
import { Create } from "./pages/Create.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Settings } from "./pages/Settings.tsx";
import { UseMeContextProvider } from "./contexts/useMe.context.tsx";
import { UseLoginContextProvider } from "./contexts/useLogin.context.tsx";
import { UpdateBlog } from "./pages/UpdateBlog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
  {
    path: "/user/:username",
    element: <App />,
    children: [
      {
        path: "/user/:username",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/user/:username/settings",
    element: <App />,
    children: [
      {
        path: "/user/:username/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/user/:username/blog/:blogID/edit",
    element: <App />,
    children: [
      {
        path: "/user/:username/blog/:blogID/edit",
        element: <UpdateBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseLoginContextProvider>
      <UseMeContextProvider>
        <RouterProvider router={router} />
      </UseMeContextProvider>
    </UseLoginContextProvider>
  </React.StrictMode>
);
