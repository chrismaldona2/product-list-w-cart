import styles from "./ConfirmedModal.module.css";
import Backdrop from "@/shared/components/Backdrop/Backdrop";
import Button from "@/shared/components/Button/Button";
import { icons } from "@/assets/icons";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import useCart from "@/features/cart/hooks/useCart";
import ConfirmedProductItem from "./components/ConfirmedProductItem/ConfirmedProductItem";

export default function ConfirmedModal({ close }) {
  const { cart, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice;

  const handleClose = () => {
    clearCart();
    close();
  };

  return (
    <Backdrop>
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.6, opacity: 1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.15, opacity: 0 }}
        transition={{
          duration: 0.35,
          type: "spring",
        }}
      >
        <div className={styles.modal__icon}>{icons.confirmed}</div>
        <div className={styles.modal__content}>
          <h1 className={styles.modal__title}>Order Confirmed</h1>
          <span className={styles.modal__subtitle}>
            We hope you enjoy your food!
          </span>
          <div className={styles.cart__container}>
            <ul className={styles.cart}>
              {cart.map((product, index) => {
                return <ConfirmedProductItem product={product} key={index} />;
              })}
            </ul>
            <div className={styles["cart__total-container"]}>
              <span className={styles["cart__total-label"]}>Order Total</span>
              <span className={styles.cart__total}>&#36;{totalPrice}</span>
            </div>
          </div>
        </div>
        <Button onClick={handleClose} className={styles.modal__btn}>
          Start New Order
        </Button>
      </motion.div>
    </Backdrop>
  );
}

ConfirmedModal.propTypes = {
  close: PropTypes.func.isRequired,
};
