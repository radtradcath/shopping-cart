import { useState, useEffect } from "react";
import styles from "./Jewelery.module.css";
import ShopItem from "../../ShopItem/ShopItem";
import ShopSection from "../ShopSection/ShopSection";

function Jewelery() {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const getJeweleryAPI = (async () => {
      const getJewelery = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const parsedJewelery = await getJewelery.json();

      setJewelery(parsedJewelery);
      console.log(parsedJewelery);
    })();
  }, []);

  return (
    <ShopSection section="Jewelery">
      {jewelery.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Jewelery;
