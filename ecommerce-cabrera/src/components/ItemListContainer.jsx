import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";


export default function ItemListContainer() {
  
  const [listadoDeProductos, setListadoDeProductos] = useState([]);

  useEffect(() => {

    const db = getFirestore();

    const itemCollection = db.collection("productos")

    itemCollection.get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log('No hay documentos con esta query');
          return
        }

        setListadoDeProductos(querySnapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        }));
      })
    
      .catch((err) => {
        console.log(err)
      })
   
  }, [])


  return (
    <>
      <div>
      <ItemList products={listadoDeProductos} />
      </div>
    </>
  );
  
}