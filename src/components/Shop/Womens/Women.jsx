import { useState, useEffect } from "react";
import styles from "./Womens.module.css";
import ShopItem from "../../ShopItem/ShopItem";
import ShopSection from "../ShopSection/ShopSection";

function Womens() {
  const [Womens, setWomens] = useState([]);

  useEffect(() => {
    const getWomensAPI = (async () => {
      const getWomens = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const parsedWomens = await getWomens.json();

      setWomens(parsedWomens);
      console.log(parsedWomens);
    })();
  }, []);

  return (
    <ShopSection section="Women's Clothing">
      {Womens.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Womens;