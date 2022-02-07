import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";


export default function NavBar() {

    const { sumarCantidades, cart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        setCantidad(sumarCantidades());
    },[cart])


    return (
        <>
            <div id="navbar">
                <ul>
                    <li><button className="boton-menu"><Link to={"/"}><img src="https://tienda.movistar.com.ar/media/logo/stores/1/logo-movistar.png" /></Link></button></li>
                    <li><button className="boton-menu"><Link to={"/category/LG"}>LG</Link></button></li>
                    <li><button className="boton-menu"><Link to={"/category/Motorola"}>Motorola</Link></button></li>
                    <li><button className="boton-menu"><Link to={"/category/Samsung"}>Samsung</Link></button></li>
                    <CartWidget cant={cantidad} />
                </ul>
            </div>
        </>
    )
    
}