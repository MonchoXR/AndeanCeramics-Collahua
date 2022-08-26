 

export const ItemCajaDetalle=({cajaProducto})=>{

    return (
      <>
            <h5> CART </h5>
            <div className="item_CartDetalle">
              <div className="item_imgCajaDetalle">
                <img src={cajaProducto[0].img} className="" alt="Catalago3" />
                {/* <button className="item_btnCajaDetalle"> X </button> */}
              </div>

              <div>
                <span>{cajaProducto[0].nombre}</span>
                <br></br>
                <span>1x $40.00</span>
              </div>
            </div>
      </>
    );
}

