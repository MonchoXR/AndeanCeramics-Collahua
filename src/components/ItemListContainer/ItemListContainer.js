import Kero from '../../Assets/Catologo/kero600x600.png';

function ItemListContainer({nombre, precioActual}){
  return (
    <>
      <div className="prod_marco">
        <div className="prod_img">
          <img src={Kero} className="" alt="Kero" />
          <div className="prod_sale">sale!</div>
        </div>
        <h5 className=" prod_textCenter ">{nombre}</h5>
        <div className="prod_cajaInfoCart">
          <div className="prod_price">
            <div className="prod_priceBefore">$60.00</div>
            <div className="prod_priceCurrently">${precioActual}</div>
          </div>

          <button className="prod_addCart">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;