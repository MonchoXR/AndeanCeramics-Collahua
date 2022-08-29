
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {UseLibro} from '../../hooks/hooksApiLibro';
import { useState,useEffect } from 'react';

import Icono from '../../Assets/Iconos/DualRing.gif';

export const ItemDetailContainer=()=>{


  const URLGET="https://api.itbook.store/1.0/new";
  const {libro,state} = UseLibro(URLGET);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{  

      setLoading(state);
  

},[state])


    return (
      
      <>          
          {
           loading ? <img src={Icono}/>
            :
           <ItemDetail stock={10} initial={0} data={libro.image} name={libro.title}/>
            }        

      </>
    );
}
