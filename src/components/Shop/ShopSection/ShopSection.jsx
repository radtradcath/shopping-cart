import styles from "./ShopSection.module.css";
import PropTypes from 'prop-types'

function ShopSection({ section, children }) {
  return (
    <div className={styles.shopSection}>
      <h1 className={styles.sectionName}>{section}</h1>
      {children}
    </div>
  );
}

ShopSection.propTypes = {
  section: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
}

export default ShopSection;
