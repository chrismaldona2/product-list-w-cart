import { useReducer, useEffect } from "react";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const cartReducer = (state, action) => {
  const { payload, type } = action;
  const findProduct = (id) => state.find((item) => item.id === id);

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productExists = findProduct(payload.id);
      if (productExists) {
        return state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item
        );
      }
      return [...state, { ...payload, quantity: 1, total: payload.price }];
    }

    case CART_ACTION_TYPES.REMOVE_ONE_FROM_CART: {
      const productExists = findProduct(payload.id);
      if (!productExists) {
        return state;
      }
      if (productExists.quantity === 1) {
        return state.filter((item) => item.id !== payload.id);
      }
      return state.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.total - item.price,
            }
          : item
      );
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const productExists = findProduct(payload.id);
      if (!productExists) {
        return state;
      }
      return state.filter((item) => item.id !== payload.id);
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return [];
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default function useCartReducer() {
  const { getItem, setItem } = useLocalStorage("cart");
  const initialState = getItem() || [];

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setItem(state);
  }, [state, setItem]);

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });

  const removeOneFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ONE_FROM_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
    });
  };

  return { state, addToCart, removeOneFromCart, removeFromCart, clearCart };
}
