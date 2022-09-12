import Table from 'react-bootstrap/Table';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";


export const CartContainerSummary=()=>{
  
  const {getNumeroSubTotal } = useContext(CartContext);


    return (
        <>
        <div className="cart_segundaSeccion">
          <div className="cart_summary  ">


            <Table  className='cart_contTableFont' >
              <tbody>
                <tr>
                  <th className="cart_sinBottomBorder" scope="row"><h3>ORDEN SUMMARY</h3></th>
                
                  </tr>
                <tr>
                  <th scope="row">SubTotal</th>
                  <td id="cart_subTotalJS" className="prod_colorLetraCart">${getNumeroSubTotal()}</td>
                </tr>
                <tr>
                  <th scope="row">Shipping</th>
                  <td id="cart_shipJS" className="prod_colorLetraCart">100</td>
                </tr>
                <tr >
                  <th className="cart_sinBottomBorder" scope="row">Total</th>
                  <td  id="cart_precioTotal" className="cart_sinBottomBorder cart_colorLetraTotal">${getNumeroSubTotal()+100}</td>
                </tr>
              </tbody>
              
            </Table>
             <button className="cart_ViewCheckOut">Procced To CheckOut</button>
            <p>Promotion, Coupon Code: </p>
            <div className="cart_cuponContainer">
                <input type="text" className="form-control " placeholder="Cupon Code" />                
                <button className="cart_btnApply">Apply</button>
             </div>

          </div> 
        </div>


        </>
    );
}
