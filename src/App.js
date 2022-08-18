// import logo from './logo.svg';
import './App.css';
// import Alerta from './components/Alerta/Alerta';
import MiNavPublic from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';

function App() {
  return (
    // <div className="App">
    <>
        <MiNavPublic></MiNavPublic>
        <BannerPrincipal></BannerPrincipal>
        <ItemListContainer></ItemListContainer>

        
    </>
    // </div>
  );
}
export default App;
