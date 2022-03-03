import React from "react";
import {Link} from 'react-router-dom';
import MasMenos from "./MasMenos";


export default function ItemDetail({ producto, onAdd, added }) {

    

    return (
        <>
            <div className="container-detail">
                <div className="info-detail">
                    {producto.item1t ? <><h3>{producto.item1t}</h3> <p>{producto.item1}</p><br /></> : <span></span>}
                    {producto.item2t ? <><h3>{producto.item2t}</h3> <p>{producto.item2}</p><br /></> : <span></span>}
                    {producto.item3t ? <><h3>{producto.item3t}</h3> <p>{producto.item3}</p><br /></> : <span></span>}
                    {producto.item4t ? <><h3>{producto.item4t}</h3> <p>{producto.item4}</p><br /></> : <span></span>}
                    {producto.item5t ? <><h3>{producto.item5t}</h3> <p>{producto.item5}</p><br /></> : <span></span>}
                    {producto.item6t ? <><h3>{producto.item6t}</h3> <p>{producto.item6}</p><br /></> : <span></span>}
                    {producto.item7t ? <><h3>{producto.item7t}</h3> <p>{producto.item7}</p><br/></>:<span></span>}
                </div>
                <div className="card-detail">
                    <h2>{producto.title}</h2>
                    <img src={producto.pictureUrl} className="imgProd" />
                    <p>{producto.description}</p>
                    <p>${producto.price}</p>
                    <p>Stock Disponible: {producto.stock}</p>
                    <p><button className="boton-card-detail"><Link to={"/"}>Volver</Link></button><br />
                    {added ? <button className="boton-card-detail"><Link to={"/cart"}>Ir al carrito</Link></button> : <MasMenos stock={producto.stock} initial={1} onAdd={onAdd} />}</p>
                </div>
            </div>
            
        </>
    );
    
}