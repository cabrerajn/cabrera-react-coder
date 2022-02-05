import React from "react";
import {Link} from 'react-router-dom';
import MasMenos from "./MasMenos";


export default function ItemDetail({ producto, onAdd, added }) {

    return (
        <>
            <div>
                {(producto.id) ?
                    <>
                        <div className="card">
                            <h2>{producto.title}</h2>
                            <img src={producto.pictureUrl} className="imgProd" />
                            <p>{producto.description}</p>
                            <p>${producto.price}</p>
                            <p>Stock Disponible: {producto.stock}</p>
                            <button><Link to={"/"}>Volver</Link></button>
                            {added ? <Link to={"/cart"}>Ir al carrito</Link> : <MasMenos stock={producto.stock} initial={1} onAdd={onAdd} />}
                        </div>
                    </>
                    :
                    <>Loading...</>
                }
            </div>
        </>
    );
    
}