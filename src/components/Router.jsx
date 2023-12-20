import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Jewelery from "./Shop/Jewelery";
import Electronics from "./Shop/Electronics";
import Mens from "./Shop/Mens";
import Womens from "./Shop/Women";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
});

const Router = function Router() {
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    const itemId = e.target.closest(".itemParent").id;
    const found = cart.some((el) => el.id === itemId);

    setCart(
      found
        ? cart.map((el) =>
            el.id === itemId ? { id: itemId, count: el.count + 1 } : el
          )
        : [...cart, { id: itemId, count: 1 }]
    );
    console.log(cart);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
      children: [
        { path: "electronics", element: <Electronics /> },
        { path: "jewelery", element: <Jewelery /> },
        { path: "men's clothing", element: <Mens /> },
        { path: "women's clothing", element: <Womens /> },
      ],
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default Router;
