import React, { useContext } from 'react';
import { CartContext } from './CartContext';


export default function CartItem({ prod }) {
  
  const { deleteItem } = useContext(CartContext);

  return (
    <>
      <div>
        <h3>{prod.item.title}</h3>
        <p>quantity: {prod.count}</p> 
        <button onClick={() => deleteItem(prod.item.id)}>Delete</button>
      </div>
    </>
  )
  
};

