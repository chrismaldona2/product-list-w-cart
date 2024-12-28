import PropTypes from "prop-types";
import styles from "./ProductCartItem.module.css";

export default function ProductCartItem({ product }) {
  const { name, quantity } = product;

  const price = product.price.toFixed(2);
  const total = product.total.toFixed(2);

  return (
    <li className={styles.item}>
      <div className={styles.item__info}>
        <span className={styles.item__name}>{name}</span>
        <div className={styles.item__pricing}>
          <span className={styles.item__quantity}>{quantity}x</span>
          <span className={styles["item__pricing-at-sign"]}></span>
          <span className={styles.item__price}>&#64; &#36;{price}</span>
          <span className={styles.item__total}>&#36;{total}</span>
        </div>
      </div>
    </li>
  );
}

ProductCartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number,
  }).isRequired,
};
