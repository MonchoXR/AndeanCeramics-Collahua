import { Productos } from '../Producto/Producto';
import { ItemList } from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

function ItemListContainer(){

  // console.log(useParams());
  const {tipoCatalogo} = useParams();   //el mismo nombre definido la variable

  const [misProdcutos, setMisProductos] =useState([])

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
    <main class="banner_producto">
      <h1>Products</h1>
    </main>

      {
        misProdcutos.length>0 &&
        <>
               <ItemList items={misProdcutos}/>
        </>
      }
   
     
    </>
  );
}

export default ItemListContainer;