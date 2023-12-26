import Layout from "../Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Router";
import styles from "./Cart.module.css";

function CartItem({ product, handler }) {
  return (
    <li id={product.id} key={product.id}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <span>{product.title}</span>
      <span>{product.count} un.</span>
      <span>$ {product.price}</span>
      <button onClick={handler}>X</button>
    </li>
  );
}

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function handleDelete(e) {
    const itemId = e.target.parentNode.id;

    setCart(cart.filter((el) => el.id != itemId));
    
  }

  return (
    <Layout>
      <div className={styles.cartContainer}>
        <h1>Your cart</h1>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handler={handleDelete}
            />
          ))}
        </ul>
        <span>
          Total: $
          {cart
            .reduce((prev, next) => prev + next.count * next.price, 0)
            .toFixed(2)}
        </span>
      </div>
    </Layout>
  );
}

export default Cart;
