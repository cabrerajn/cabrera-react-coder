import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";



export default function Cart() {

  const { cart, clearCart, sumarTotales, sumarCantidades } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {

    setTotal(sumarTotales());
    setCantidad(sumarCantidades());
    
  },[cart])
    
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
          <p>Cantidad: { cantidad}</p>
          <p>Total: ${ total}</p>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      }
    </>
  )
  
} 