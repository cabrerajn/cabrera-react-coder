import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CategoryContainer from './components/CategoryContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import FormCheckout from './components/FormCheckout';


export default function App() {
    
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div><NavBar /></div>
          <Switch>
            <Route exact path="/">
              <div className="mainBanner">
                <img src="https://tienda.movistar.com.ar/media/mageplaza/bannerslider/banner/image/s/u/summersale_tienda-min.jpg" />
              </div> 
              <ItemListContainer />
            </Route>
          
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route path="/category/:categoriaId">
              <CategoryContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/checkout">
              <FormCheckout />
            </Route>
          </Switch>
          <div><Footer /></div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
  
}

