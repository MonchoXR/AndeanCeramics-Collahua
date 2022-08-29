
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {UseLibro} from '../../hooks/hooksApiLibro';
import { useEffect, useState } from 'react';

export const ItemDetailContainer=()=>{
  const URLGET="https://api.itbook.store/1.0/new";
  const {libro} = UseLibro(URLGET);

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  setTimeout(()=>{

    setData(libro);
     setLoading(false);

  },2000)


    return (
      <>          
              {
                loading ? <h1>Cargando...</h1>
                :
                <ItemDetail stock={10} initial={0} data={data.image} name={data.title}/>
              }
                              
      </>
    );
}
