import React from "react";
import { Link } from "react-router-dom";
import CartIcon from '../img/CartIcon.png'



export default function CartWidget() {
    return (
        <>
           <li><Link to={"/cart"}><img className="cart-widget" src={CartIcon} />0</Link></li>
        </>
    )
}