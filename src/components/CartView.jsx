import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeItem, cartTotal, clear}= useContext(CartContext)

    const preConfirmation = () =>{
        Swal.fire({
            title:'¿Esta seguro de borrar todo el carrito?',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }else if(result.isDenied){
                //en el caso de que quieran poner algo si se rechaza
            }
        })
    }
  return (
    <div>
        <h3>Tu carrito</h3>
        <div>
            {cart.map((compra)=>(
                //si quieren pueden hacer un componente que se llame CARTITEM
                // <CartItem key={compra.id} compra={compra}/>
                <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                    <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                    <span>{compra.name}</span>
                    <span>{compra.quantity}</span>
                    <span>${compra.price},00</span>
                    <span>Precio final: ${compra.price * compra.quantity},00</span>
                    <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                </div>
            ))}
        </div>
        <span>Total a pagar: ${cartTotal()},00</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={preConfirmation}>Borrar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView