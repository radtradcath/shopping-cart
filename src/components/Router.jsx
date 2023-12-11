import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";

const Router = function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
