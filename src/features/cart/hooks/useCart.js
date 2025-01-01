import { CartContext } from "@/shared/contexts/CartContext";
import { useContext, useMemo } from "react";

export default function useCart() {
  const {
    cart,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    getProductQuantity,
    clearCart,
  } = useContext(CartContext);

  const getTotalPrice = useMemo(() => {
    return cart
      .reduce((total, product) => total + product.quantity * product.price, 0)
      .toFixed(2);
  }, [cart]);

  const getTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const isProductInCart = (id) => {
    return cart.some((product) => product.id === id);
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
    clearCart,
  };
}
