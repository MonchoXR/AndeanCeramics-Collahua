import { Link } from "react-router-dom";
import {  useState } from "react"
import { useContext, } from "react";
import { CartContext } from "../../Context/CartContext";

export const Item=({productos, items})=>{

  const [contador, setContador] = useState(0);
  const {addProduct,isIntCart,addCantToCart } = useContext(CartContext);
  // console.log("mi items"+ productos)

  const agregarItem = (quantityToAdd) => {

    if (!isIntCart(productos.id)) {
      const newProduct = { ...productos, cantidad: 1 };
      addProduct(newProduct);

    } 
     else {
     
      addCantToCart(productos.id, 1);
    }
 
  };   


    return (
      <>
        <div className="prod_col_margen">
          <div className="prod_marco">
            <div className="prod_img">
            <Link to ={`/item/${productos.id}`}>   <img src={productos.img} className="" alt="Kero" /></Link>
              <div className="prod_sale">sale!</div>
            </div>
            <h3 className=" prod_textCenter ">{productos.nombre}</h3>
            <div className="prod_cajaInfoCart">
              <div className="prod_price">
                <div className="prod_priceBefore">$60.00</div>
                <div className="prod_priceCurrently">${productos.precio}</div>
            
              </div>
               <button  className="prod_addCart"  onClick={agregarItem}>Add To Cart</button>
              {/* <button  className="prod_addCart">Add To Cart</button> */}
            </div>
          </div>
        </div>
      </>
    );
}

