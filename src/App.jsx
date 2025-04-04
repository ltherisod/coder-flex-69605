import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/ejemplos/Button'
import TextComponent from './components/ejemplos/TextComponent'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
function App() {
  
// const saludar = () => {
//   alert('hOLIS')
// }

// const despedirse = ()=> {
//   console.log('Chauu')
// }
  return (
    <>
    {/* <Navbar/> */}
    <NavbarReactBootstrap/>
    <ItemListContainer greeting='Bienvenidos a mi app!'/>
     {/* <Button estilo={'button-app'} text='Primer button!' handler={saludar}>
      Hola chicos yo soy una children
      Hola chicos yo soy una children
     </Button>
     <Button estilo={'button-coders'} text='Hola Coders 🥳!' handler={despedirse}>
      <TextComponent/>
     </Button> */}
    </>
  )
}

export default App
