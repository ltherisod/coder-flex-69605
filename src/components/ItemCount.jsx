import  {useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
   
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

    const comprar = ()=>{
        onAdd(count)
    }
    
  return (
    <div>
        <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span  className='btn'>{count}</span>
            <button  className='btn btn-success' onClick={sumar}>+</button>
        </div>
        {/* funcion a parte */}
        <button  className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>
        {/* funcion anoonima */}
         {/* <button  className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button> */}
         {/* NO HACER ASI */}
         {/* <button  className='btn btn-primary' onClick={onAdd(count)}>Agregar al carrito</button> */}
    </div>
  )
}

export default ItemCount