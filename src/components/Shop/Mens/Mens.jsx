import { useState, useEffect } from "react";
import styles from "./Mens.module.css";
import ShopItem from "../../ShopItem/ShopItem";
import ShopSection from "../ShopSection/ShopSection";

function Mens() {
  const [Mens, setMens] = useState([]);

  useEffect(() => {
    const getMensAPI = (async () => {
      const getMens = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const parsedMens = await getMens.json();

      setMens(parsedMens);
      console.log(parsedMens);
    })();
  }, []);

  return (
    <ShopSection section="Men's Clothing">
      {Mens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Mens;