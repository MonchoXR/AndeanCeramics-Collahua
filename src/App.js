

// import Alerta from './components/Alerta/Alerta';
import { useState } from "react"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import SeccionTitle from './components/SeccionTitle/SeccionTitle';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import { Carrito } from './components/Carrito/Carrito';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PaginError } from "./Pages/PaginaError/PaginaError";
import { Home } from "./Pages/Home/Home";
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
      <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/category/:tipoCatalogo' element={<ItemListContainer/>}/>
          <Route path='/item/:tipoItem' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<ItemListContainer/>}/>
        </Routes>


    

        {/* <ItemCount  stock={10} initial={0}  onAdd={agregar}></ItemCount> */}
        {/* <Carrito cantidad={numeroProductos}></Carrito> */}
     </BrowserRouter>
    </>

  );
}
export default App;
