import React, { useEffect, useState } from 'react'
import ApiList from './ApiList'
import useFetch from '../../hooks/useFetch'

const FetchApi = () => {
    // const [personajes, setPersonajes] = useState([])
    const {data,loading, error}= useFetch('https://dragonball-api.com/api/characters')

    // useEffect(()=> {
    //     //pedir la info
    //     fetch('https://dragonball-api.com/api/characters')
    //     //traducimos 
    //     .then((res)=> res.json())
    //     //guardar la data
    //     .then((response)=> setPersonajes(response.items))
    //     .catch((error)=> console.error(error))
    // },[])

    //try catch

    // useEffect(()=> {
    //     const fetchPersonajes = async () => {
    //         try{
    //             const res = await fetch('https://dragonball-api.com/api/characters')
    //             const data = await res.json()
    //             setPersonajes(data.items)
    //         }catch(error){
    //             console.error(error)
    //         }
    //     }
    //     fetchPersonajes()
    // },[])

    // console.log(personajes)
    if(loading){
        return <h1>Cargando...</h1>
    }
    if(error){
        return <h1>Error</h1>
    }
  return (
    <div>
       {data ? <ApiList personajes={data.items}/> : <></>}
    </div>
  )
}

export default FetchApi