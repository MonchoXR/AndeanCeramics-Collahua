

// import Alerta from './components/Alerta/Alerta';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from "./Pages/Home/Home";
import { ComponenteVacio } from "./components/ComponenteVacio/ComponenteVacio";
// import { Catalogo } from './components/Catalogo/Catalogo';



//Imagenes
function App() {



  return (

    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/category/:tipoCatalogo' element={<ItemListContainer/>}/>
          <Route path='/item/:tipoId' element={<ItemDetailContainer/>}/>
          <Route path='/cart/' element={<ComponenteVacio/>}/>
          <Route path='*' element={<ItemListContainer/>}/>
        </Routes>


     </BrowserRouter>
    </>

  );
}
export default App;
