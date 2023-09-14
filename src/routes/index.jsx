import { createBrowserRouter } from "react-router-dom";
import { Home } from "~/pages/Home";
import { Search } from "~/pages/Search";
import { MainLayout } from "~/layout/main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
