import { useState, useContext, useEffect } from "react";

import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Jewelery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = (async () => {
      const fetchItems = await fetch("https://fakestoreapi.com/products");
      const parsedItems = await fetchItems.json();

      setItems(parsedItems);
    })();
  }, []);

  const jewelery = items.filter((item) => item.category === "jewelery");

  return (
    <ShopSection section="Jewelery" className={styles.jeweleryOutlet}>
      {jewelery.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Jewelery;
