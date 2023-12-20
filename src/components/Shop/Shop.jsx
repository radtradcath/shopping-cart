import Layout from "../Layout/Layout";
import styles from "./Shop.module.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

function Shop() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = (async () => {
      const fetchCategories = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const parsedCategories = await fetchCategories.json();

      setCategories(parsedCategories);
    })();
  });

  return (
    <Layout>
      <div className={styles.shopContainer}>
        <nav className={styles.navList}>
          {categories.map((category) => (
            <Link to={`${category}`} id={category} key={category}>
              {category}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </Layout>
  );
}

export default Shop;
