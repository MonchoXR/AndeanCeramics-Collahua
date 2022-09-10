
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

function CartWidget(){

    const {getNumeroTotalProducts} = useContext(CartContext);

    return(
    <>
        <div className="cardWidget">
            <FaShoppingCart/>
            <h6 className="umberCardWidget">{getNumeroTotalProducts()}</h6>
        </div>
        
    </>
    )
}

export default CartWidget;