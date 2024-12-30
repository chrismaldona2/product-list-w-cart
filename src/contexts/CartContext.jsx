import { createContext, useCallback } from "react";
import useCartReducer from "@/hooks/useCartReducer";
import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { state, addToCart, removeOneFromCart, removeFromCart, clearCart } =
    useCartReducer();

  const isProductInCart = useCallback(
    (productId) => {
      return state.some((item) => item.id === productId);
    },
    [state]
  );

  const getProductQuantity = useCallback(
    (productId) => {
      const product = state.find((item) => item.id === productId);
      return product ? product.quantity : 0;
    },
    [state]
  );

  return (
    <CartContext.Provider
      value={{
        cart: state,
        isProductInCart,
        getProductQuantity,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
