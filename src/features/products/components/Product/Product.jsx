import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./Product.module.css";
import PropTypes from "prop-types";
import useCart from "@/features/cart/hooks/useCart";

const Product = ({ product }) => {
  const { name, category } = product;
  const { mobile, tablet, desktop } = product.image;
  const { isProductInCart } = useCart();

  const price = product.price.toFixed(2);
  const isInCart = isProductInCart(product.id);

  return (
    <article className={styles.product}>
      <div className={styles["product__image-container"]}>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet={desktop}
            width="502"
            height="480"
          />
          <source
            media="(min-width: 550px)"
            srcSet={tablet}
            width="427"
            height="424"
          />
          <img
            src={mobile}
            alt={name}
            width="654"
            height="424"
            className={`${styles.product__thumbnail} ${
              isInCart && styles["product__thumbnail--inCart"]
            }`}
          />
        </picture>
        <AddToCartButton
          className={styles["product__add-cart-btn"]}
          product={product}
        />
      </div>
      <div className={styles.product__info}>
        <span className={styles.product__category}>{category}</span>
        <span className={styles.product__name}>{name}</span>
        <span className={styles.product__price}> &#36;{price}</span>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      thumbnail: PropTypes.string,
      mobile: PropTypes.string,
      tablet: PropTypes.string,
      desktop: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
