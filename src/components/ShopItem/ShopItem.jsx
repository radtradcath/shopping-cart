import styles from "./ShopItem.module.css";

function ShopItem({ handler, item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{item.title}</h3>
        <p className={styles.itemPrice}>{item.price}</p>
      </div>
      <div className={styles.cardButtons}>
        <button>COUNTER</button>
        <button onClick={handler}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
