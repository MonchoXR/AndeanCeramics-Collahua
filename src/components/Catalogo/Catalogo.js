// import {Imagenes} from '../Imagenes/Imagenes'
    
export const Catalogo=(props)=>{

    return (
      <> 
        <section className="row_cat">
          <div className="col_cat col_cat_inicial ">
            <img src={props.iglesia} className=" " alt={props.iglesiaDesc}/>
            <h5 className=" text-center ">Iglesia Ayacuchana</h5>
          </div>
          <div className="col_cat  ">
            <img src={props.torito} className=" " alt={props.toritoDesc}/>
            <h5 className=" text-center">Toro de Pucará</h5>
          </div>
          <div className="col_cat ">
            <img src={props.arbol} className=" " alt={props.arbolDesc}/>
            <h5 className=" text-center">Lampara Arbol de la Felicidad</h5>
          </div>
          <div className="col_cat ">
            <img src={props.llama} className=" " alt={props.llamalDesc}/>
            <h5 className=" text-center">Llama y Familia</h5>
          </div>
          <div className="col_cat col_cat_ultimo">
            <img src={props.gallina} className=" " alt={props.gallinaDesc}/>
            <h5 className=" text-center">Gallina PortaHuevo</h5>
          </div>
          
        </section>
      </>
    );
}

