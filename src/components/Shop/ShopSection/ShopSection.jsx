import styles from "./ShopSection.module.css";

function ShopSection({ section, children }) {
  return (
    <div className={styles.shopSection}>
      <h1 className={styles.sectionName}>{section}</h1>
      {children}
    </div>
  );
}

export default ShopSection;
