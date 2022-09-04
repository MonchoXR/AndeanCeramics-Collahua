
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {UseProducto} from '../../hooks/hookProducto';
import { Productos } from '../Producto/Producto';
import { useState,useEffect } from 'react';

import Icono from '../../Assets/Iconos/DualRing.gif';


export const ItemDetailContainer = () => {


  const { items, state } = UseProducto(Productos);
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(state);

  }, [state]);

  return (
    <>
      {loading ? (
      
           <ItemDetail  data={Icono}/>
      
     
      ) : (
        <ItemDetail
          stock={10}
          initial={0}
          data={items.img}
          name={items.nombre}
          key={items.id}
        />
      )}
    </>
  );
};
