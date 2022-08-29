import { Productos } from '../Producto/Producto';
import { ItemList } from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
function ItemListContainer(){

  const [producto, setProductos] =useState([])

  const obtenerProductos =()=>{
      return new Promise((resolve, reject)=>{
          // setTimeout(()=>{
            resolve(Productos)
            reject(err =>console.error(err))
          // },3000);
      })
  }




useEffect(()=>{

  const funcionAsincrona =async()=>{
    try {
        const listadoProductos = await obtenerProductos();
        setProductos(listadoProductos)
        // console.log("listado Productos",listadoProductos);
    } catch (error) {
        console.log("Hubo error");
    }
  
  }
  funcionAsincrona();

},[])

  return (
    <>
      {
        producto.length>0 &&
        <>
               <ItemList MisProductos={producto}/>
        </>
      }
   
     
    </>
  );
}

export default ItemListContainer;