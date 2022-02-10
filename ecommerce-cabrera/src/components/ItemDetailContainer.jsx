import React, { useState, useEffect, useContext } from "react";
import {useParams} from 'react-router-dom';
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";
import "firebase/firestore";


export default function ItemDetailContainer() {

  const { addToCart } = useContext(CartContext);

  const { itemId } = useParams();

  const [producto, setProducto] = useState([]);
  const [added, setAdded] = useState(false)
  

  useEffect(() => { 
    const db = getFirestore();

    const itemCollection = db.collection("productos")

    const itemFilter = itemCollection.doc(itemId)
    
    itemFilter.get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No hay documentos con esta query');
          return
        }

        setProducto({ id: doc.id, ...doc.data() })
      })
  
      .catch((err) => {
        console.log(err)
      });
      
    }, [itemId])

  const onAdd = (count) => {
    addToCart(producto, count)
    setAdded(true)
  }


  return (
    <>
      <div>
        <ItemDetail onAdd={onAdd} producto={producto} added={added} />
      </div>
    </>
  );
  
}