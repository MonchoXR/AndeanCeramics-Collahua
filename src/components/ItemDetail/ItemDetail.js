
import { useState } from "react"
import Kero from '../../Assets/Catologo/3D/Kero.glb';
import { Carrito } from "../Carrito/Carrito";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail=({data, name})=>{

    const [numeroProductos, setNumeroProductos] = useState(0);
 
    const agregarItem =(quantityToAdd)=>{  
      console.log('Numero carrito agregadp',quantityToAdd);
      
      setNumeroProductos(quantityToAdd);
   
  
    }   



    return (
      <>

      <section className="item_container">
            <div className="item_caja1">
                <model-viewer
                    bounds="tight"
                    // src={Kero}
                   
                     poster={data}
                    ar
                    ar-scale="fixed"
                    ar-modes="scene-viewer webxr quick-look"
                    camera-controls
                    environment-image="neutral"
                    shadow-intensity="0"
                    exposure="0.3"
                    auto-rotate
                    ar-status="not-presenting"            
                    className="ModelV"
                    >
                     
                    <div className="progress-bar hide" slot="progress-bar">
                        <div className="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
                </model-viewer>
            </div>
            

            <div className="item_caja2">
                <div className="item_title">{name}</div>
                <div className="item_precio">$45</div>
                <div className="item_size">Size </div>
                <div className="item_size_desc">32 cm x 25 cm</div>
                <div className="item_text_cantidad">Cantidad</div>
      
                 <ItemCount  stock={10} initial={0}  onAdd={agregarItem}/>
                <div className="item_Detalles">Details</div>
                <div className="item_frase">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
                    blanditiis molestias at iure, explicabo quasi tempore ipsam quis.
                    Alias aliquam molestiae maxime expedita similique consequatur eaque
                    accusantium vero quam aut.
                </div>
            </div>
        </section>
              <Carrito cantidad={numeroProductos} />
      </>
    );
}
