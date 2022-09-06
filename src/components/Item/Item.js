import { Link } from "react-router-dom";

export const Item=({productos})=>{

    return (
      <>
        <div className="prod_col_margen">
          <div className="prod_marco">
            <div className="prod_img">
            <Link to ={`/item/${productos.id}`}>   <img src={productos.img} className="" alt="Kero" /></Link>
              <div className="prod_sale">sale!</div>
            </div>
            <h5 className=" prod_textCenter ">{productos.nombre}</h5>
            <div className="prod_cajaInfoCart">
              <div className="prod_price">
                <div className="prod_priceBefore">$60.00</div>
                <div className="prod_priceCurrently">${}</div>
            
              </div>
              <Link to ={`/itemCart/${productos.id}`}> <button  className="prod_addCart">Add To Cart</button></Link>
              {/* <button  className="prod_addCart">Add To Cart</button> */}
            </div>
          </div>
        </div>
      </>
    );
}

