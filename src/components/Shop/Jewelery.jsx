import { useContext } from "react";
import { CartContext } from "../Router";
import ShopItem from "../ShopItem/ShopItem";
import ShopSection from "./ShopSection/ShopSection";
import styles from "./ShopSection/ShopSection.module.css";

function Jewelery() {
  const { products, setProducts } = useContext(CartContext);

  const jewelery = products.filter((item) => item.category === "jewelery");

  return (
    <ShopSection section="Jewelery" className={styles.jeweleryOutlet}>
      {jewelery.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Jewelery;
