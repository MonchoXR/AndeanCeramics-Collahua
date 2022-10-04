
import { useLocation } from "react-router-dom";


export const SuccessStripe =()=>{
    const location = useLocation();
    // console.log("en success",location.state.name)

    const {idOrder, order}= location.state.name

  
    return(
        <>
        <h2>Su compra fue un exito <span style={{color: "red"}}> {[order.buyer.name]} {[order.buyer.LastName]}</span></h2>

       <h3>El ID de su producto es: <span style={{color: "red"}}>{idOrder} </span></h3>
        </>
    )
}