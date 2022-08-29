
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {UseLibro} from '../../hooks/hooksApiLibro';
import { useState,useEffect } from 'react';

export const ItemDetailContainer=()=>{

  console.log("llamo1");
  const URLGET="https://api.itbook.store/1.0/new";
  const {libro,state} = UseLibro(URLGET);
  // console.log(libro)
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(()=>{  
    console.log("llamo2");
 
    // setTimeout(()=>{
      
      // setData(libro);
      setLoading(state);
      
    // },4000)

},[state])

// console.log(data);

    return (
      
      <>          
          {
           loading ? <h1>Cargando...</h1>
            :
           <ItemDetail stock={10} initial={0} data={libro.image} name={libro.title}/>
            }        
            <h1>${  console.log("llamo3")}</h1>      
      </>
    );
}
