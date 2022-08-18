import Kero from '../../Assets/Catologo/kero600x600.png';

function ItemListContainer(){
  return (
    <>
      <div className="prod_marco">
        <div className="prod_img">
          <img src={Kero} className="" alt="Kero" />
          <div class="prod_sale">sale!</div>
        </div>
        <h5 className=" prod_textCenter ">Kero</h5>
        <div className="prod_cajaInfoCart">
          <div className="prod_price">
            <div className="prod_priceBefore">$60.00</div>
            <div className="prod_priceCurrently">$40.00</div>
          </div>

          <button className="prod_addCart">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;