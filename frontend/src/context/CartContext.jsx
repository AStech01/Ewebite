// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exist = state.cartItems.find((x) => x._id === action.payload._id);
      const cartItems = exist
        ? state.cartItems.map((x) =>
            x._id === action.payload._id ? { ...x, qty: x.qty + 1 } : x
          )
        : [...state.cartItems, { ...action.payload, qty: 1 }];
      return { ...state, cartItems };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };

    case 'SET_CART':
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user?._id;
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  // Load cart only after AuthProvider sets user
  useEffect(() => {
    if (!userId) {
      dispatch({ type: 'CLEAR_CART' });
      setIsCartLoaded(true);
    } else {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      dispatch({
        type: 'SET_CART',
        payload: storedCart ? JSON.parse(storedCart) : [],
      });
      setIsCartLoaded(true);
    }
  }, [userId]);

  // Save cart on change
  useEffect(() => {
    if (userId && isCartLoaded) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state.cartItems));
    }
  }, [state.cartItems, userId, isCartLoaded]);

  if (!isCartLoaded) return null; // Prevent rendering children until cart is loaded

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
