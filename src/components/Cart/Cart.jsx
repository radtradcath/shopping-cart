import Layout from "../Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Router";

function CartItem({item}) {
  return (
    <div>
      <div>{item.image}</div>
      <span>{item.title}</span>
      <span>{item.price} un.</span>
      <span></span>
    </div>
  )
}

function Cart() {
  const { cart, setCart, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  return (
    <Layout>
      <h1>Your cart</h1>
    </Layout>
  );
}

export default Cart;
