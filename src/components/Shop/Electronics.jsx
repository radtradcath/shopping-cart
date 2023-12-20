import { useState, useContext, useEffect } from "react";

import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Electronics() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setItems(parsedItems);
    })();
  }, []);

  const electronics = items.filter((item) => item.category === "electronics");

  return (
    <ShopSection section="Electronics" className={styles.electronicsOutlet}>
      {electronics.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          item={item}
          // submitHandler={addToCart}
        />
      ))}
    </ShopSection>
  );
}

export default Electronics;
