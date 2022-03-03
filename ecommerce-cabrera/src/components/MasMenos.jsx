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
            <button className="boton-card-detail" onClick={()=>restar()}>-</button>
            {cantidad}
            <button className="boton-card-detail" onClick={() => sumar()}>+</button>
            <button className="boton-card-detail" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        </>
    )

}