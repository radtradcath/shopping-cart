import { useContext } from "react";
import styles from "./ShopItem.module.css";
import { CartContext } from "../Router";

function Counter({ itemCount, handler }) {
  return (
    <div className={styles.counterContainer}>
      <button onClick={handler}>-</button>
      <span>{itemCount}</span>
      <button onClick={handler}>+</button>
    </div>
  );
}

function ShopItem({ item, id }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className={`${styles.itemContainer} itemParent`} id={id}>
      <div className={styles.imgContainer}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{item.title}</h3>
        <p className={styles.itemPrice}>{item.price}</p>
      </div>
      <div className={styles.cardButtons}>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
