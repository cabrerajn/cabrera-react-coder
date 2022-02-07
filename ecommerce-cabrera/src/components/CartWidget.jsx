import React from "react";
import { Link } from "react-router-dom";
import CartIcon from '../img/CartIcon.png'



export default function CartWidget({cant}) {
    return (
        <>
            <li><Link to={"/cart"}><img className="cart-widget" src={CartIcon} /></Link></li>
            {cant > 0 ? <li>{cant}</li> :
            <li></li>}
           
        </>
    )
}