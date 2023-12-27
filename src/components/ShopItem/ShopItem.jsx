import { useContext } from "react";
import PropTypes from 'prop-types'
import styles from "./ShopItem.module.css";
import { CartContext } from "../Router";

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

ShopItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default ShopItem;
