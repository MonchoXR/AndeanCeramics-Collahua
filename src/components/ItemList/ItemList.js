
// 
import {Item} from '../Item/Item'

export const ItemList=({items})=>{

    return (
      <>
        <section className="list_itemContainer">
              <div className="list_itemPrimeraSeccion">
                  {
                  items.map(elementos => (
                    // <Link key={elementos.id} to={`/item/${elementos.id}`}>
                    //      <Item productos={elementos}  />
                    // </Link>
                     <Item productos={elementos}  key={elementos.id}/>
                  ))
                  }
              </div>
    
          {/* <div className="list_itemSegundaSeccion">
            <ItemCajaDetalle cajaProducto={MisProductos}/>
          </div> */}
        </section>
      </>
    );
}

