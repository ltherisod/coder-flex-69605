import React, { useState } from 'react'

const Input = () => {
    const [nombre, setNombre] = useState('')

    const inputHandler = (event) => {
        console.log(event.target.value)
        setNombre(event.target.value)
    }

    const onKeyDownHandler = (e) => {
       if('aeiou'.includes(e.key.toLowerCase())){
        console.log('es vocal')
        e.preventDefault()
       }else{
        console.log('no es vocal')
       }
    }
    
  return (
    <div>
        <input placeholder='complete con su nombre completo' onChange={inputHandler} type='text' name='nombre-completo'/>
        {/* <input placeholder='complete con su nombre completo' onChange={(e)=> setNombre(e.target.value)} type='text' name='nombre-completo'/> */}
        <p>{nombre}</p>
        <h1>Actividad de no vocales</h1>
        <input placeholder='No vocals!' type='text' onKeyDown={onKeyDownHandler}/>
    </div>
  )
}

export default Input