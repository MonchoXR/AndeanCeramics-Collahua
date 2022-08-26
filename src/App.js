

// import Alerta from './components/Alerta/Alerta';
import { useState } from "react"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import SeccionTitle from './components/SeccionTitle/SeccionTitle';

import { ItemCount } from './components/ItemCount/ItemCount';
import { Carrito } from './components/Carrito/Carrito';

// import { Catalogo } from './components/Catalogo/Catalogo';



//Imagenes
function App() {

  const [numeroProductos, setNumeroProductos] = useState(0);
 
  const agregar =(contador)=>{  
    // console.log('Numero carrito agregadp',contador);
    
    setNumeroProductos(contador);
 

  }    
  //  console.log("el numeroProductos",numeroProductos);

  return (

    <>
        <Navbar></Navbar>
        <BannerPrincipal></BannerPrincipal>
        <SeccionTitle></SeccionTitle>
        <ItemListContainer></ItemListContainer>
        {/* <ItemCount  stock={10} initial={0}  onAdd={agregar}></ItemCount> */}
        {/* <Carrito cantidad={numeroProductos}></Carrito> */}

    </>

  );
}
export default App;
