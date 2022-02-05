import React, { useState } from "react";


export default function MasMenos({stock, initial, onAdd}){

    const [cantidad, setCantidad]  = useState(initial);

    function sumar() {
        if(cantidad < stock ) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > initial) setCantidad(cantidad-1)
    }

    return(
        <>
            <button onClick={()=>restar()}>-</button>
            {cantidad}
            <button onClick={() => sumar()}>+</button>
            <button onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        </>
    )

}