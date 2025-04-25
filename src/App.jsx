import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
// import ItemCount from './components/ItemCount';
import FetchCountry from './components/ejemplos/FetchCountry';
import FetchApi from './components/ejemplos/FetchApi';
import ItemDetailContainer from './components/ItemDetailContainer';
// import withLogging from './hoc/withLogging';
// import MessageComponent from './components/ejemplos/MessageComponent';
function App() {
  console.log('App')

  // const MensajeConLog = withLogging(MessageComponent)
  return (
    <>
    <NavbarReactBootstrap/>
    <ItemListContainer greeting='Bienvenidos a mi app!'/>
    <ItemDetailContainer/>
   
    </>
  )
}

export default App
