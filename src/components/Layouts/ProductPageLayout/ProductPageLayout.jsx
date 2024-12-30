import PropTypes from "prop-types";
import styles from "./ProductPageLayout.module.css";

function ProductPageLayout({ children }) {
  const [left, right] = children;
  return (
    <div className={styles.layout}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

ProductPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductPageLayout;
