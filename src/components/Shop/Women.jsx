import { useContext } from "react";
import { CartContext } from "../Router";
import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Womens() {
  const { products, setProducts } = useContext(CartContext);

  const womens = products.filter((item) => item.category === "women's clothing");

  return (
    <ShopSection section="Women's Clothing" className={styles.womensOutlet}>
      {womens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Womens;
