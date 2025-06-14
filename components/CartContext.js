import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product, amount) => {
    setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
            return prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + amount }
                    : item
            );
        }
        return [...prev, { ...product, quantity: amount }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


