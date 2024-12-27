import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/helpers/concatClassNames";

function Button({ type = "button", onClick, className, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(styles.button, className)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
