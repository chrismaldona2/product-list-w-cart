import { createContext } from "react";
import useCartReducer from "@/hooks/useCartReducer";
import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { state, addToCart, removeOneFromCart } = useCartReducer();

  const isProductInCart = (productId) => {
    return state.some((item) => item.id === productId);
  };
  const getProductQuantity = (productId) => {
    const product = state.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };
  return (
    <CartContext.Provider
      value={{
        cart: state,
        isProductInCart,
        getProductQuantity,
        addToCart,
        removeOneFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
