import { useState, useContext, useEffect } from "react";

import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Mens() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setItems(parsedItems);
    })();
  }, []);

  const mens = items.filter((item) => item.category === "men's clothing");

  return (
    <ShopSection section="Men's Clothing" className={styles.mensOutlet}>
      {mens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Mens;
