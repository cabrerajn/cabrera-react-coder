import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
            <nav className="menu">
                <li className="logo"><Link to={"/"}><img src="https://tienda.movistar.com.ar/media/logo/stores/1/logo-movistar.png" /></Link></li>
                <ul>
                    <li><NavLink to={"/category/LG"}>LG</NavLink></li>
                    <li><NavLink to={"/category/Motorola"}>Motorola</NavLink></li>
                    <li><NavLink to={"/category/Samsung"}>Samsung</NavLink></li>
                    <CartWidget cant={cantidad} />
                </ul>
            </nav>
        </>
    )
    
}