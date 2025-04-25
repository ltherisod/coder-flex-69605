import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemCount from './components/ItemCount';
import FetchCountry from './components/ejemplos/FetchCountry';
import FetchApi from './components/ejemplos/FetchApi';
import withLogging from './hoc/withLogging';
import MessageComponent from './components/ejemplos/MessageComponent';
function App() {
  console.log('App')

  const MensajeConLog = withLogging(MessageComponent)
  return (
    <>
    <NavbarReactBootstrap/>
    <FetchApi/>
    <FetchCountry/>
    <MensajeConLog mensaje='Hola usando un HOC'/>
    <ItemListContainer greeting='Bienvenidos a mi app!'/>

     {/* <ItemCount stock={15}/> */}
    </>
  )
}

export default App
