import PropTypes from "prop-types";
import styles from "./ProductsPageLayout.module.css";

function ProductsPageLayout({ children }) {
  const [left, right] = children;
  return (
    <div className={styles.layout}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

ProductsPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsPageLayout;
