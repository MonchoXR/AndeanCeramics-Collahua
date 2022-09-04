
import { useState } from "react"
import Kero from '../../Assets/Catologo/3D/Kero.glb';


export const ItemDetail=({stock,initial, data, name, onAdd})=>{
    //cuando una propieda o una variable de estado cambie,
    //el componete vuelve a renderizarse
    const [contador, setContador] = useState(initial);



    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }

                
  
    }

    const decrementar = ()=>{
        if(contador>initial){
            setContador(contador - 1)
         

        }

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
                        {/* <img src={data}/> */}
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
                <div className="item_cant_caja">
                    <button className="item_btn_cont" onClick={incrementar}>+</button>
                    <div className="item_conta">{contador}</div>
                    <button className="item_btn_cont" onClick={decrementar}>-</button>
                </div>

                <button disabled={contador>0? false:true} className={`  ${contador<1? 'Negro':'item_btn_agregar' }`} onClick={() => onAdd(contador)}>
                    Agregar Carrito
                </button>
                
                <div className="item_Detalles">Details</div>
                <div className="item_frase">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
                    blanditiis molestias at iure, explicabo quasi tempore ipsam quis.
                    Alias aliquam molestiae maxime expedita similique consequatur eaque
                    accusantium vero quam aut.
                </div>
            </div>
        </section>
      </>
    );
}
