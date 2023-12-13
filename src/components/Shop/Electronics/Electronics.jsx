import { useEffect, useState } from "react";
import ShopItem from "../../ShopItem/ShopItem";
import styles from "./Electronics.module.css";
import ShopSection from "../ShopSection/ShopSection";

function Electronics() {
  const [electronics, setElectronics] = useState([]);

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
    <ShopSection section="Electronics">
      {electronics.map((item) => (
        <ShopItem key={item.id} id={item.id} item={item} />
      ))}
    </ShopSection>
  );
}

export default Electronics;
