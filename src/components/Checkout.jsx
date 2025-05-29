import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
const [buyer, setBuyer] = useState({})
const [validateMail, setValidateMail]= useState('')
const [orderId, setOrderId] = useState('')
const {cart, cartTotal, clear}= useContext(CartContext)
    const buyerData = (e)=>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        //hacer que no recarge
        e.preventDefault()
        //validar
        if(!buyer.name || !buyer.address || !buyer.email){
            alert('Por favor complete los campos!')
        }else if(buyer.email !== validateMail){
            alert('Los correos no coinciden')
        }else{

            let orden={
                comprador:buyer,
                compras:cart,
                total:cartTotal(),
                date: serverTimestamp()
            }
          
            const ventas = collection(db, "orders")
            //agregar un nuevo doc
            addDoc(ventas, orden)
            .then((res)=>{
               setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
  return (
    <div>
        {
            orderId 
            ? <div>
                <h2>Tu orden se generó con éxito!</h2>
                <p>Su id de seguimiento es: {orderId}</p>
                <Link className='btn btn-dark' to='/'>Volver a home!</Link>
            </div>
            :<div>
        <h1>Completa con tus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre completo' onChange={buyerData}/>
            <input className='form-control' type="text" name='address' placeholder='Ingrese su dirección' onChange={buyerData}/>
            <input className='form-control' type="email" name='email' placeholder='Ingrese su correo' onChange={buyerData}/>
            <input className='form-control' type="email" name='email-2' placeholder='Repita su correo' onChange={(e)=> setValidateMail(e.target.value)} />
            <button className='btn btn-success' type='submit'>Finalizar Compra</button>
        </form>
    </div>
        }
    </div>
  )
}

export default Checkout