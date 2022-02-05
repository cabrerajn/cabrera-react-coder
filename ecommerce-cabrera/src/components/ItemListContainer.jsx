import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";


export default function ItemListContainer() {
  
  const [listadoDeProductos, setListadoDeProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setListadoDeProductos([
        { id: 1, title: 'Samsung A12', category:'Samsung', description: '64GB de Memoria', price: 33999, pictureUrl: 'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/a/samsung_galaxy_a12_negro_frente_lifestyle_7_1_1.png', stock: 5 },
        {id: 2, title: 'Motorola E40', category:'Motorola', description: '32GB de Memoria', price: 27499, pictureUrl:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/2/0/2021_cyprus464_basicpack_carbon_gray_frontside_4.png', stock: 6},
        {id: 3, title: 'LG Q6', category:'LG', description: '32GB de Memoria', price: 8499, pictureUrl:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/l/g/lg_q6_negro_gtia_pantalla_1_1.png', stock: 7}]);
    }, 2000)
  }, [])

  return (
    <>
      <div>
        <ItemList products={listadoDeProductos} />
      </div>
    </>
  );
  
}