import React, { createContext, useState } from "react";


export const CartContext = createContext();


export function CartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  const addToCart = (product, count) => {
    if (isInCart(product.id)){
      const indexItem = cart.findIndex(ele => ele.item.id === product.id);
      cart[indexItem].count = cart[indexItem].count + count;
      setCart([...cart]);
    }
    else
    {
      setCart([...cart, { item: product, count }])
    }
  }

  const deleteItem = (id) => {
    const updatedCart = cart.filter(element => element.item.id !== id)
    setCart(updatedCart);
  }

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id)
  }

  const clearCart = () => {
    setCart([])
  }

  const sumarTotales = () => {

    if (cart.length > 0)
    { return cart.map((item) => item.item.price * item.count).reduce((a, b) => a + b); }
    else {
      return 0
    }
  }

  const sumarCantidades = () => {

    if (cart.length > 0) {
      return cart.map((item) =>item.count).reduce((a, b) => a + b);
    }    
    else {
      return 0
    }

  }


  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, sumarTotales, sumarCantidades }}>
      {children}
    </CartContext.Provider>
  )
  
};

