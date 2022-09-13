import { Productos } from '../Producto/Producto';
import { ItemList } from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { ItemListMiniCart } from '../itemListMiniCart/itemListMiniCart';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


function ItemListContainer(){

  // console.log(useParams());
  const {tipoCatalogo} = useParams();   //el mismo nombre definido la variable

  const [misProdcutos, setMisProductos] =useState([])
  const {productCartList} = useContext(CartContext);
  const obtenerProductos =()=>{
      return new Promise((resolve, reject)=>{
          // setTimeout(()=>{
            resolve(Productos)
            reject(err =>console.error(err))
          // },3000);
      })
  }




useEffect(() => {
  const funcionAsincrona = async () => {
    try {
      if (!tipoCatalogo) {
        const listadoProductos = await obtenerProductos();
        setMisProductos(listadoProductos);
      } else {
        const listadoProductos = await obtenerProductos();
        const nuevaLista = listadoProductos.filter(
          (item) => item.categoria === tipoCatalogo
        );

        setMisProductos(nuevaLista);
      }
    } catch (error) {
      console.log("Hubo error", error);
    }
  };
  funcionAsincrona();
}, [tipoCatalogo]);

  return (
    <>
    <main className="banner_producto">
      <h1>Products</h1>
    </main>
    <section className="list_itemContainer">
      <div className="list_itemPrimeraSeccion">

      {
        misProdcutos.length>0 &&
        <>
               <ItemList items={misProdcutos}/>
        </>
      }
      
      </div>
   

      <section className="prod_segundaSeccion">
      
         <h5> CART </h5>
        
         {
             productCartList.length>0? 
            <>
                 <ItemListMiniCart/>
            </>
            :
            <>
               <p>You have no items in your cart!</p> 
             </>
         }
     
      </section>
    </section>
    </>
  );
}

export default ItemListContainer;