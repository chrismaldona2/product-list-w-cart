import styles from "./AddToCardButton.module.css";
import { concatClassNames as cn } from "@/helpers/concatClassNames";
import { icons } from "@/assets/icons";
import useCart from "@/features/cart/hooks/useCart";
import { motion } from "motion/react";
import PropTypes from "prop-types";

export default function AddToCartButton({ className, product }) {
  const { getProductQuantity, addToCart, removeOneFromCart } = useCart();
  const quantity = getProductQuantity(product.id);

  const handleAdd = () => addToCart(product);
  const handleRemove = () => removeOneFromCart(product);

  if (quantity === 0)
    return (
      <div className={cn(styles["add-cart-button__container"], className)}>
        <button className={styles["add-cart-button"]} onClick={handleAdd}>
          {icons.addToCart}
          Add to Cart
        </button>
      </div>
    );

  if (quantity > 0)
    return (
      <motion.div
        className={cn(styles["cart-count__container"], className)}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.35 }}
      >
        <button
          className={styles["cart-count__button"]}
          onClick={handleRemove}
          aria-label="Add one"
        >
          {icons.decrease}
        </button>
        <span className={styles["card-count"]}>{quantity}</span>
        <button
          className={styles["cart-count__button"]}
          onClick={handleAdd}
          aria-label="Decrease one"
        >
          {icons.increase}
        </button>
      </motion.div>
    );
}

AddToCartButton.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
