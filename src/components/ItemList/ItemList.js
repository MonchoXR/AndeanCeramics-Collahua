
// 
import {Item} from '../Item/Item'
import {ItemCajaDetalle} from '../ItemCajaDetalle/ItemCajaDetalle'

export const ItemList=({MisProductos})=>{

    return (
      <>
        <section className="list_itemContainer">
          <div className="list_itemPrimeraSeccion">
            {
            MisProductos.map((elementos) => {
              return <Item productos={elementos}  key={elementos.id}/>;
            })
            }
          </div>
    
          {/* <div className="list_itemSegundaSeccion">
            <ItemCajaDetalle cajaProducto={MisProductos}/>
          </div> */}
        </section>
      </>
    );
}

