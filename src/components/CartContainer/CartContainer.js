
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export const CartContainer=({})=>{
  
  const {productCartList, deleteProduct,clear} = useContext(CartContext);


    return (
      <>
        <main className="cartCont_banner">
        <h1>Cart</h1>
        </main>

        <Table striped  hover >
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">SubTotal</th>
              </tr>
            </thead>
            <tbody>
        
                {
                  productCartList.map(item=>(
                    
                    <tr key={item.id}>
                        <th className="cartCont_cuadro" scope="row " ><div  className="cartCont_cuadro"><button onClick={()=>deleteProduct(item.id)} className="cartCont_btnEliminar"> X </button></div></th>
                        <td className="cartCont_cuadro"><img src={item.img} className="cartImagen" alt="Catalago3" /></td>
                        <td  className="cartCont_cuadro"> <div> {item.nombre} </div></td>
                        <td  className="cartCont_cuadro"> <div> $40 </div></td>
                        <td  className="cartCont_cuadro"><div> {item.cantidad} </div></td>
                        <td  className="cartCont_cuadro"><div> 40 </div></td>
                    </tr>

                  ))
                } 

             
             </tbody>
             
          </Table>
          <button  onClick={()=>clear()} className="">VaciarCarrito</button>

      </>
    );
}
