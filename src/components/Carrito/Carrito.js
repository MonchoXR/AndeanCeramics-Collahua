import { Link } from "react-router-dom";
export const Carrito=({cantidad})=>{
  


    return (
      <>
        <div className="cont_carrito">
          <div className="carrito_mensaje">
            Mi carrito tiene {cantidad} items
          </div>
          <Link to ={"/cart"}> <button className="btn_compra">Terminar Compra</button></Link>
        </div>
      </>
    );
}
