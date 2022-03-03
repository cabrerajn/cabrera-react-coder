import React from "react";
import { Link } from "react-router-dom";


export default function Item({ product }) {
    
    return (
        <>
            <div className="card">
                <h2>{product.title}</h2>
                <img src={product.pictureUrl} className="imgProd" />
                <p>${product.price}</p>
                <button> <Link to={"/item/" + product.id}>Ver</Link></button>
            </div> 
            
        </>
    );
    
}