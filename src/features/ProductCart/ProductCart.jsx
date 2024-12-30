import styles from "./ProductCart.module.css";
import Button from "@/components/Button/Button";
import { icons } from "@/assets/icons";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import useCart from "@/hooks/useCart";
import ProductCartItem from "./components/ProductCartItem/ProductCartItem";
import ConfirmedModal from "@/features/ConfirmedModal/ConfirmedModal";

export default function ProductCart() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { cart, getTotalQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice;
  const quantity = getTotalQuantity();

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  return (
    <>
      <motion.section
        className={styles.cart}
        initial={{
          scale: 0.5,
        }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
        layout
      >
        <motion.h2 className={styles.cart__title} layout>
          Your Cart &#40;{quantity}&#41;
        </motion.h2>

        {quantity === 0 ? (
          <div className={styles["cart__content--empty"]}>
            {icons.cake}
            <span>Your added items will appear here</span>
          </div>
        ) : (
          <div>
            <ul className={styles.cart__list}>
              {cart.map((product, index) => {
                return <ProductCartItem product={product} key={index} />;
              })}
            </ul>
            <div className={styles["cart__total-container"]}>
              <span className={styles["cart__total-label"]}>Order Total</span>
              <span className={styles.cart__total}>&#36;{totalPrice}</span>
            </div>
            <div className={styles.cart__advice}>
              {icons.three}
              <span>
                This is <b>carbon-neutral</b> delivery
              </span>
            </div>
            <Button className={styles.cart__confirm} onClick={handleConfirm}>
              Confirm order
            </Button>
          </div>
        )}
      </motion.section>

      <AnimatePresence>
        {isConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConfirmedModal
              close={() => {
                setIsConfirmed(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
