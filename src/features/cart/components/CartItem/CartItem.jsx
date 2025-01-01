import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import { icons } from "@/assets/icons";
import useCart from "@/features/cart/hooks/useCart";
import { motion } from "motion/react";

export default function CartItem({ product }) {
  const { name, quantity } = product;
  const price = product.price.toFixed(2);
  const total = product.total.toFixed(2);

  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <motion.li
      className={styles.item}
      initial={{ scale: 0.75 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.35,
        type: "spring",
      }}
    >
      <div className={styles.item__info}>
        <span className={styles.item__name}>{name}</span>
        <div className={styles.item__pricing}>
          <span className={styles.item__quantity}>{quantity}x</span>
          <span className={styles["item__pricing-at-sign"]}></span>
          <span className={styles.item__price}>&#64; &#36;{price}</span>
          <span className={styles.item__total}>&#36;{total}</span>
        </div>
      </div>
      <div className={styles.item__actions}>
        <button
          className={styles.item__delete}
          onClick={handleRemove}
          aria-label="Remove item"
        >
          {icons.remove}
        </button>
      </div>
    </motion.li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number,
  }).isRequired,
};
