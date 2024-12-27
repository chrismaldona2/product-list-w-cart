import { useState } from "react";
import styles from "./AddToCardButton.module.css";
import { concatClassNames as cn } from "@/helpers/concatClassNames";
import PropTypes from "prop-types";

const icons = {
  addToCart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
      <g fill="#C73B0F" clipPath="url(#a)">
        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.333 0h20v20h-20z" />
        </clipPath>
      </defs>
    </svg>
  ),
  decrease: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 2">
      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  ),
  increase: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
      <path
        fill="#fff"
        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
      />
    </svg>
  ),
};

export default function AddToCartButton({ className }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  if (count === 0)
    return (
      <div className={cn(styles["add-cart-button__container"], className)}>
        <button className={styles["add-cart-button"]} onClick={increase}>
          {icons.addToCart}
          Add to Cart
        </button>
      </div>
    );

  if (count > 0)
    return (
      <div className={cn(styles["cart-count__container"], className)}>
        <button className={styles["cart-count__button"]} onClick={decrease}>
          {icons.decrease}
        </button>
        <span className={styles["card-count"]}>{count}</span>
        <button className={styles["cart-count__button"]} onClick={increase}>
          {icons.increase}
        </button>
      </div>
    );
}

AddToCartButton.propTypes = {
  className: PropTypes.string,
};
