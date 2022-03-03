import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";
import Loader from "./Loader";


export default function ItemListContainer() {
  
  const [listadoDeProductos, setListadoDeProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      .finally (() => setLoading(false))
   
  }, [])


  return (
    <>
      <div>
        {loading ? <Loader /> : <ItemList products={listadoDeProductos} />}
      </div>
    </>
  );
  
}