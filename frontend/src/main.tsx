import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Login } from "./pages/Login.tsx";
import { ValidationContextProvider } from "./contexts/validation.context.tsx";
import { Create } from "./pages/Create.tsx";
import { Profile } from "./pages/Profile.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ValidationContextProvider>
      <RouterProvider router={router} />
    </ValidationContextProvider>
  </React.StrictMode>
);
