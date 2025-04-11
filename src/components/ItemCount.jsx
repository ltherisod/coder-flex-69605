import React, {useState, useEffect} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]=useState(1)
    const [compra, setCompra]= useState(false)
    console.log('itemcount')


    //se actualiza siempre
    useEffect(()=>{
        console.log('Me actualizo siempre')
    })

    //se ejecuta una sola vez
    useEffect(()=>{
        console.log('Me ejecuto 1 vez')
    },[])


    //se ejecuta cuando monta componente y cuando se actualiza lo que esta escuchando
    useEffect(()=> {
        console.log('Me ejecuto 1 veza y siempre que compra cambie')
    },[compra])


    const comprarProductos = () =>{
        setCompra(!compra)
    }

    const sumar = () => {
        if(count < stock){

            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

  return (
    <div>
        <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span  className='btn'>{count}</span>
            <button  className='btn btn-success' onClick={sumar}>+</button>
        </div>
        <button  className='btn btn-primary' onClick={comprarProductos}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount