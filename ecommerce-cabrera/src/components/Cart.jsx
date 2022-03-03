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
        <div className="carro-vacio">
          <p className="empty">CARRITO VACÍO</p>
          <button className='boton-card-detail'><Link to='/'>Ir a comprar!</Link></button>
        </div>
        :
        <div>
          <table className="tabla-carrito">
            <thead className="encabezado">
              <tr>
                <td>Producto</td>
                <td>Cantidad</td>
                <td>Precio</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
            <tr>{cart.map(element => <CartItem key={element.item.id} prod={element} />)}</tr>
            </tbody>
          </table>
          <div className="total">Cantidad: { cantidad}</div>
          <div className="total">Total: ${total}</div>
          <div className='boton-carrito'><button className="boton-card-detail"><Link to="/checkout">Comprar</Link></button></div>
          <div className='boton-carrito' ><button className="boton-card-detail" onClick={() => clearCart()}>Vaciar carrito</button></div>
        </div>
      }
    </>
  )
  
} 