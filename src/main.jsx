import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Todo from "./pages/todo";
import Index from "./pages";
import Finished from "./pages/Finished";

const router = createBrowserRouter([
  {path: "/",
    element: <Index />
  },
  {path: "/todo",
    element: <Todo />
  },
  {path: "/finished",
    element: <Finished />
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );

