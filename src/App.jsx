import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import FetchApi from './components/ejemplos/FetchApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
    <NavbarReactBootstrap/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a mi app!'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/fetch' element={<FetchApi/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
