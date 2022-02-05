import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";


export default function Cart() {

  const { cart, clearCart } = useContext(CartContext);
    
  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      }
    </>
  )
  
} 