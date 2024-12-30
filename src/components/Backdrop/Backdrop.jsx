import PropTypes from "prop-types";
import styles from "./Backdrop.module.css";

function Backdrop({ children }) {
  return <div className={styles.backdrop}>{children}</div>;
}

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Backdrop;
