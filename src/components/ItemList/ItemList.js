
// 
import {Item} from '../Item/Item'

export const ItemList=({items})=>{

    return (
      <>
   
                  {
                  items.map(elementos => (
                    // <Link key={elementos.id} to={`/item/${elementos.id}`}>
                    //      <Item productos={elementos}  />
                    // </Link>
                     <Item productos={elementos}  key={elementos.id} items={items}/>
                  ))
                  }
  
      </>
    );
}

