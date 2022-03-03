import React, { useContext } from 'react';
import { CartContext } from './CartContext';


export default function CartItem({ prod }) {
  
  const { deleteItem} = useContext(CartContext);

  return (
    <>
          <td>{prod.item.title}<br /><img src={prod.item.pictureUrl} className="imgProd" /></td>
          <td>{prod.count}</td> 
          <td>${ prod.item.price}</td>
          <td><button className='boton-card-detail' onClick={() => deleteItem(prod.item.id)}>Eliminar</button></td>
    </>
  )
  
};

