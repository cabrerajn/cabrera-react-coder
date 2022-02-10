import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from "../firebase/firebase";


export default function CategoryContainer() {

    const { categoriaId } = useParams();

    const [producto, setProducto] = useState([]);
  
    useEffect(() => {
        
        const db = getFirestore();

        const itemCollection = db.collection("productos")
        
        const categoryFilter = itemCollection.where('category', '==',  categoriaId )
        
        categoryFilter.get()
            .then((querySnapShot) => {
                if (querySnapShot.size === 0) {
                    console.log('No hay documentos con esta query');
                    return
                }
                setProducto(querySnapShot.docs.map((doc=>{ return { id: doc.id, ...doc.data() }})))
            })
        
            .catch((err) => {
                console.log(err)
            })
    }, [categoriaId])
  
    return (
        <>
            {producto.map(item => <Item product={item} />)}
        </>
    );
    
}