import Header from "../Header/Header";
import PropTypes from 'prop-types'
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { createContext, useState } from "react";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout;
