
import { createContext, useState } from "react";


export const CartContext = createContext();
export const CartProvider = ({children})=>{
  
    const [productCartList, setProductCartList] = useState([]);
    const addProduct = (product)=>{

        const newList = [...productCartList,product];
        setProductCartList(newList)

    }

    const deleteProduct = (idProduct)=>{

        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);

        
    }

    const isIntCart = (idProduct)=>{

        const valida= productCartList.some((a) => {
              return  a.id === idProduct;
        } )
        return(valida)
    }

    const addCantToCart=(id,quantityToAdd)=>{
        
            const  copiaOriginal = [...productCartList]
            // const objetoxID =copiaOriginal.find((items)=>{
            // if(items.id === id){ 
            //   return items.cantidad =(items.cantidad +quantityToAdd);
            // }});
            const objetoxID =copiaOriginal.find((items=> items.id === id))
            const objetoxIDCant = objetoxID.cantidad +quantityToAdd;
            const nuevoArraySinObjectoID = copiaOriginal.filter(elm=>elm.id !== id);
            const nuevoArrayModificado= [...nuevoArraySinObjectoID,objetoxIDCant]
            setProductCartList(nuevoArrayModificado);
   
    
    }


    const getNumeroTotalProducts=()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc+item.cantidad,0)
        return totalProducts;
    }

    const clear=()=>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct,isIntCart,addCantToCart,getNumeroTotalProducts,clear}}>
            {/* ..components */}
            {children}
        </CartContext.Provider>
    )
}