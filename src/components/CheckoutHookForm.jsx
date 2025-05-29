import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const CheckoutHookForm = () => {

const [orderId, setOrderId] = useState('')
const {cart, cartTotal, clear}= useContext(CartContext)
const {register, handleSubmit, formState:{errors}, getValues} = useForm()
// console.log(errors)
    const finalizarCompra = (dataDelForm) => {
            let orden={
                buyer:{
                    name:dataDelForm.name,
                    address:dataDelForm.address,
                    email:dataDelForm.email
                },
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
        <form onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre completo' {...register("name", {required:true, minLength:5})}/>
            {errors?.name?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
             {errors?.name?.type === 'minLength' && <span style={{color:'red'}}>El nombre debe tener como mínimo 5 caracteres</span>}
            <input className='form-control' type="text" name='address' placeholder='Ingrese su dirección' {...register("address", {required:true, minLength:10, maxLength:25})}/>
            {errors?.address?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo dirección</span>}
             {errors?.address?.type === 'minLength' && <span style={{color:'red'}}>La dirección debe tener como mínimo 10 caracteres</span>}
             {errors?.address?.type === 'maxLength' && <span style={{color:'red'}}>La dirección no debe exceder los 25 caracteres</span>}
            <input className='form-control' type="email" name='email' placeholder='Ingrese su correo' {...register("email", {required:true})}/>
             {errors?.email?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo</span>}
            <input className='form-control' type="email" name='email-2' placeholder='Repita su correo' {...register("secondmail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
             {errors?.secondmail?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo </span>}
            {errors?.secondmail?.type === "equalsMails" && <span style={{color:'red'}}>Los mails deben ser iguales </span>}
            <button className='btn btn-success' type='submit'>Finalizar Compra</button>
        </form>
    </div>
        }
    </div>
  )
}

export default CheckoutHookForm