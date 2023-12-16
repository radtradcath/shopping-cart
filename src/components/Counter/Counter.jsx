import styles from "./Counter.module.css";
import { useState } from "react";

function Counter({itemCount, handler}) {
  return (
    <div className={styles.counterContainer}>
      <button onClick={handler}>-</button>
      <span>{itemCount}</span>
      <button onClick={handler}>+</button>
    </div>
  );
}

export default Counter;