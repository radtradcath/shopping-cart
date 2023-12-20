import { useState, useContext, useEffect } from "react";

import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Womens() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setItems(parsedItems);
    })();
  }, []);

  const womens = items.filter((item) => item.category === "women's clothing");

  return (
    <ShopSection section="Women's Clothing" className={styles.womensOutlet}>
      {womens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Womens;
