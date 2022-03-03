import React, { useState,  useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'
import { CartContext } from "./CartContext";

export default function FormCheckout() {

    const { cart, sumarTotales, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    let formValido = false;
    let errMsj = '';

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    
        
    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("ordenes");
        const total = (sumarTotales());
        const productos = db.collection("productos")
        
        validarFomulario();
        if (formValido) {
            
            const miOrden = {
                buyer: {
                    name: nameRef.current.value,
                    address: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    email: emailRef.current.value,
                    mobile: mobileRef.current.value,
                },
                items: cart,
                total: total,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }

            orders.add(miOrden)
                .then(({ id }) => {
                    console.log('orden ingresada: ' + id);
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log(err);
                });
            
            updateStock(productos);
        }
        
        
        
    }

    function updateStock(productos) {
        
        
        cart.map((product) => (productos.doc(product.item.id).update({ stock: product.item.stock - product.count })))
        clearCart();
        nameRef.current.value = ""
        addressRef.current.value=""
        cityRef.current.value=""
        stateRef.current.value=""
        emailRef.current.value=""
        mobileRef.current.value=""
        
    }

    function validarFomulario() {

        const regName = /^([A-Z&Aacute;&Eacute;&Iacute;&Oacute;&Uacute;]{1}[a-z&ntilde;&aacute;&eacute;&iacute;&oacute;&uacute;]+[\s]*)+$/;
        const regMail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
        const regCel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

        if (!regName.test(nameRef.current.value)) {
           errMsj = 'Por favor ingresar su nombre completo (Nombre y Apellido)'
           document.getElementById('errName').innerHTML=`<br/><span class="errMsj">${errMsj}</span>`
           formValido = false;
        } else {
           formValido = true;
        }

        if (!regMail.test(emailRef.current.value)) {
            errMsj = 'Mail incorrecto. Ingrese una dirección válida'
            document.getElementById('errEmail').innerHTML = `<br/><span class="errMsj">${errMsj}</span>`
            formValido = false;
        }

        if (!regCel.test(mobileRef.current.value)) {
            errMsj = 'Numero de celular incorrecto. Ingrese un úmero válido'
            document.getElementById('errMobile').innerHTML=`<br/><span class="errMsj">${errMsj}</span>`
            formValido = false;
        }        
    }
        
    return (

        <>
            {orderId && (<h2 className="order-success">Felicitaciones tu orden es {orderId}</h2>)}

            <div className="formulario">
                <h3>Ingresa tus datos:</h3>

                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" required /><label id="errName"></label>
                <br />

                <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" required /><label id="errMobile"></label>
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" required /><label id="errEmail"></label>
                <br />

                <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                <br />

                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                <br />

                <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                <br />

                <button className="boton-card-detail" onClick={() => handleClick()} >Comprar!</button>
            </div>
        </>
    );
}