//importamos el hook para utilizar el contexto
import  {useContext, useState} from 'react'
import ItemCount from './ItemCount'
//importar el CONTEXTO que queremos utilizar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detail}) => {
  const [purchase, setPurchase]= useState(false)

//Al hook en el parametro le pasamos el CONTEXTO que queremos utilizar
const {cart, addToCart}= useContext(CartContext)

  const onAdd = (cantidad) =>{
   addToCart(detail, cantidad)
   setPurchase(true)
      Swal.fire({
        position:'top-end',
        icon:'success',
        title:`Agregaste ${detail.name} al carrito`,
        showCancelButton:false,
        showConfirmButton:false,
        timer:1000
      })
  }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Detalle del producto: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades</p>
        <p>Price: ${detail.price},00</p>
       {
       purchase 
       ? <div style={{display:'flex', width:'80%', alignItems:'center', justifyContent:'space-between'}}>
          <Link  className='btn btn-dark' to='/'>Seguir comprando</Link>
          <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link>
        </div>
       : <ItemCount stock={detail.stock} onAdd={onAdd}/>
       }
    </div>
  )
}

export default ItemDetail