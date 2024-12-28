import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function useCart() {
  const {
    cart,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    getProductQuantity,
  } = useContext(CartContext);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return total.toFixed(2);
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return {
    cart,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    getTotalQuantity,
    getTotalPrice,
    isProductInCart,
    getProductQuantity,
  };
}
