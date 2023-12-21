import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./Header.module.css";
import { CartContext } from "../Router";

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <span>Logo</span>
      <span>Name</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          <span>{cart.reduce((prev, curr) => prev + curr.count, 0)}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
