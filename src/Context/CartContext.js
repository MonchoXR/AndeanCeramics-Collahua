
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

    const addCantToCart=(id,quantity)=>{
        
            const  copiaOriginal = [...productCartList]
            // const objetoxID =copiaOriginal.find((items)=>{
            // if(items.id === id){ 
            //   return items.cantidad =(items.cantidad +quantityToAdd);
            // }});
            const objetoxID =copiaOriginal.find((items=> items.id === id))
            objetoxID.cantidad = objetoxID.cantidad +quantity;
            
            const nuevoArraySinObjectoID = copiaOriginal.filter(elm=>elm.id !== id);
            const nuevoArrayModificado= [...nuevoArraySinObjectoID,objetoxID]
            setProductCartList(nuevoArrayModificado);
   
    
    }


    const getNumeroTotalCount=()=>{
    
        const totalProducts = productCartList.reduce((acc,item)=>acc+item.cantidad,0)
        // console.log("entreo a getNumeroTotal",productCartList,totalProducts);
      
        return totalProducts;
        
    }

    const getNumeroSubTotal=()=>{
    
        const SubTotalProducts = productCartList.reduce((acc,item)=>acc+item.cantidad*item.precio,0)

        return SubTotalProducts;
        
    }

    const clear=()=>{
        setProductCartList([])
    }

    const getUpdateItemCart=(id,quantity)=>{


        const newList = [...productCartList]

         let index = productCartList.findIndex(item => item.id === id)
         newList[index].cantidad = quantity
         setProductCartList(newList )

        

    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct,isIntCart,addCantToCart,getNumeroTotalCount,clear,getUpdateItemCart,getNumeroSubTotal}}>
            {/* ..components */}
            {children}
        </CartContext.Provider>
    )
}