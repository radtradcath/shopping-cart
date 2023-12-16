import styles from "./ShopItem.module.css";
import { useState } from "react";
import Counter from "../Counter/Counter";

function ShopItem({ submitHandler, item, id, counter, countHandler }) {
  
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
        <Counter itemCount={counter} handler={countHandler}/>
        <button onClick={submitHandler}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
