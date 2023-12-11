import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";

const Router = function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
