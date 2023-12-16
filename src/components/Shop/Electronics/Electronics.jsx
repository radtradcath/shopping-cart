import { useEffect, useState } from "react";
import ShopItem from "../../ShopItem/ShopItem";
import styles from "./Electronics.module.css";
import ShopSection from "../ShopSection/ShopSection";

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [count, setCount] = useState(0);

  function countHandler(e) {
    e.target.textContent === "+"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => (count === 0 ? prev : prev - 1));
  }

  function submitHandler(e) {
    const itemId = e.target.closest('.itemParent').id;
    console.log(itemId)
  }

  useEffect(() => {
    const getElectronicsAPI = (async () => {
      const getElectronics = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const parsedElectronics = await getElectronics.json();

      setElectronics(parsedElectronics);
      console.log(parsedElectronics);
    })();
  }, []);

  return (
    <ShopSection section="Electronics" className={styles.electronicsOutlet}>
      {electronics.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          item={item}
          countHandler={countHandler}
          counter={count}
          submitHandler={submitHandler}
        />
      ))}
    </ShopSection>
  );
}

export default Electronics;
