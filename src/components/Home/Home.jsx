import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import ShopItem from "../ShopItem/ShopItem";
import styles from "./Home.module.css";

function Home() {

    const [homeItems, setHomeItems] = useState([])

    useEffect(() => {
        async function getShopApi() {
          const data = await fetch('https://fakestoreapi.com/products?limit=4');
          const parsed = await data.json();
          console.log(parsed);
          setHomeItems(parsed)
        }
    
        getShopApi();
      }, []);

  return (
    <Layout>
        <div className={styles.homeContainer}>
            <div className={styles.heroContainer}>
                <h1 className="welcome">WELCOME TO MY SHOP</h1>
            </div>
            <div className={styles.previewShop}>
                {homeItems.map(item => (
                    <ShopItem 
                        key={item.id}
                        id={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    </Layout>
  );
}

export default Home;
