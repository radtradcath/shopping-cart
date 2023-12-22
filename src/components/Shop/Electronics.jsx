import { useState, useContext, useEffect } from "react";
import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";
import { CartContext } from "../Router";

function Electronics() {
  const { products, setProducts } = useContext(CartContext);

  const electronics = products.filter(
    (item) => item.category === "electronics"
  );

  return (
    <ShopSection section="Electronics" className={styles.electronicsOutlet}>
      {electronics.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          item={item}
        />
      ))}
    </ShopSection>
  );
}

export default Electronics;
