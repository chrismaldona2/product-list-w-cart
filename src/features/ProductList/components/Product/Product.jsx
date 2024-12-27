import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./Product.module.css";
import PropTypes from "prop-types";

function Product({ data }) {
  const { name, category, price } = data;
  const { thumbnail, mobile, tablet, desktop } = data.image;

  return (
    <article className={styles.product}>
      <div className={styles["product__image-container"]}>
        <picture>
          <source media="(min-width: 1200px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source media="(max-width: 767px)" srcSet={mobile} />
          <img
            src={thumbnail}
            alt={name}
            className={styles.product__thumbnail}
          />
        </picture>
        <AddToCartButton className={styles["product__add-cart-btn"]} />
      </div>
      <div className={styles.product__info}>
        <span className={styles.product__category}>{category}</span>
        <span className={styles.product__name}>{name}</span>
        <span className={styles.product__price}> &#36;{price}</span>
      </div>
    </article>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
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
