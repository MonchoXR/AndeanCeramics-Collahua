
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const ItemListMiniCart=()=>{
  const {productCartList, deleteProduct,getNumeroSubTotal} = useContext(CartContext);

    return (
      <>
        {productCartList.map((item) => (
          <>
            <div className="prod_cajaDetalle" key={item.id}>
              <div className="prod_imgCompra">
                <img src={item.img} className="" alt="Catalago3" />
                <button className="prodEliminaCss"  onClick={()=>deleteProduct(item.id)}> X </button>
              </div>

              <div>
                <span>{item.nombre}</span>
                <br />
                <span>
                  {item.cantidad}x ${item.precio}
                </span>
              </div>
            </div>

     
          </>
        ))}
            <p className="prod_colorLetraCart"><strong>SubTotal:</strong><span className=""> ${getNumeroSubTotal()}</span></p>
            <div className="prodMiniCart " >
            <Link className="prdViewCart" to ={"/cart"}><button className="prdViewCartBtn"> View Cart </button></Link>
            </div>
      </>
    );
}
