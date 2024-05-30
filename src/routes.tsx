import { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/error-page";
import TodoGroups from "./components/TodoGroups";

export const AppRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <TodoGroups />,
        errorElement: <ErrorPage />,
      },
      {
        path: ":groupId",
        element: <h1>Todos</h1>,
        errorElement: <ErrorPage />,
      },
    ],
  },
] satisfies RouteObject[];
