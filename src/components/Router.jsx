import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Jewelery from './Shop/Jewelery/Jewelery'
import Electronics from "./Shop/Electronics/Electronics";
import Mens from "./Shop/Mens/Mens";
import Womens from "./Shop/Womens/Women";

const Router = function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
      children: [
        {path: 'electronics', element: <Electronics />},
        {path: 'jewelery', element: <Jewelery />},
        {path: 'men\'s clothing', element: <Mens />},
        {path: 'women\'s clothing', element: <Womens />},
      ]
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
