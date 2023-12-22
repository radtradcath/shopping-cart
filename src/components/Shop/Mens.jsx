import { useContext } from "react";
import { CartContext } from "../Router";
import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Mens() {
  const { products, setProducts } = useContext(CartContext);

  const mens = products.filter((item) => item.category === "men's clothing");

  return (
    <ShopSection section="Men's Clothing" className={styles.mensOutlet}>
      {mens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Mens;
