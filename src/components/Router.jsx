import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Jewelery from "./Shop/Jewelery";
import Electronics from "./Shop/Electronics";
import Mens from "./Shop/Mens";
import Womens from "./Shop/Women";
import ErrorPage from "./ErrorPage/ErrorPage";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  products: [],
  setProducts: () => {},
});

const Router = function Router() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setProducts(parsedItems);
    })();
  }, []);

  const addToCart = (e) => {
    const itemId = +e.target.closest(".itemParent").id;
    const foundInCart = cart.some((el) => el.id === itemId);
    const shopItem = products.find((item) => item.id === itemId);

    setCart(
      foundInCart
        ? cart.map((el) =>
            el.id == itemId ? { ...el, count: el.count + 1 } : el
          )
        : [...cart, { ...shopItem, count: 1 }]
    );

    console.log(cart)
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
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
    <CartContext.Provider
      value={{ cart, setCart, addToCart, products, setProducts }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default Router;
