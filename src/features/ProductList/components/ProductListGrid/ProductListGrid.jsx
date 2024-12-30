import PropTypes from "prop-types";
import styles from "./ProductListGrid.module.css";

function ProductListGrid({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

ProductListGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductListGrid;
