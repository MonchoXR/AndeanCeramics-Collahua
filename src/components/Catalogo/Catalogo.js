import { Productos } from '../Producto/Producto';
import { useEffect, useState } from 'react';
export const Catalogo=()=>{

  
  const [misProdcutos, setMisProductos] =useState([])

  const [categVariados, setCategVariados] =useState([])
  const [categIglesia, setCategIglesia] =useState([])
  const [categLampara, setCatLampara] =useState([])
  const [categArca, setCatArca] =useState([])
  const [cateNaci, setCatcateNaci] =useState([])

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

        // const nuevaLista = listadoProductos.map((item)=>
        // {
        //   return{
        //     categoria: item.categoria,
        //     img: item.img
        //   }
        // })
          
        console.log("varias",listadoProductos[0]); 
        setCategVariados(listadoProductos[0])
        setCategIglesia(listadoProductos[1])
        setCatLampara(listadoProductos[3]);
        setCatArca(listadoProductos[8]);
        setCatcateNaci(listadoProductos[10]);

        setMisProductos(listadoProductos)
         
      } catch (error) {
          console.log("Hubo error",error);
      }
    
    }
    funcionAsincrona();


  },[misProdcutos])

  console.log("mis prod",misProdcutos);
  console.log("varias",categVariados); 

    return (
      <> 
        <section className="row_cat">
          <div className="col_cat col_cat_inicial ">
              <img src={categVariados.img} className=" " alt={""}/>
              <h5 className=" text-center ">{categVariados.categoria}</h5>     
            </div>
          <div className="col_cat  ">
            <img src={categIglesia.img} className=" " alt={categIglesia.categoria}/>
            <h5 className=" text-center">{categIglesia.categoria}</h5>
          </div>
          <div className="col_cat ">
            <img src={categLampara.img} className=" " alt={categLampara.categoria}/>
            <h5 className=" text-center">{categLampara.categoria}</h5>
          </div>
          <div className="col_cat ">
            <img src={cateNaci.img} className=" " alt={cateNaci.categoria}/>
            <h5 className=" text-center">{cateNaci.categoria}</h5>
          </div>
          <div className="col_cat col_cat_ultimo">
            <img src={categArca.img} className=" " alt={categArca.categoria}/>
            <h5 className=" text-center">{categArca.categoria}</h5>
          </div>
          
        </section>
      </>
    );
}

