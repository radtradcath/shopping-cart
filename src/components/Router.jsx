import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setItems(parsedItems);
    })();
  }, []);

  const addToCart = (e) => {
    const itemId = +e.target.closest(".itemParent").id;
    const foundInCart = cart.some((el) => el.id === itemId);
    const shopItem = items.find((item) => item.id === itemId);

    setCart(
      foundInCart
        ? cart.map((el) =>
            el.id == itemId ? { ...el, count: el.count + 1 } : el
          )
        : [...cart, { ...shopItem, count: 1 }]
    );

    // setCart(
    //   foundInCart
    //     ? cart.map((el) =>
    //         el.id === itemId ? { id: itemId, count: el.count + 1 } : el
    //       )
    //     : [...cart, { id: itemId, count: 1 }]
    // );
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
