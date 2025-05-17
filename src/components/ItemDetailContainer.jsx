import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})
const [loading, setLoading]= useState(false)
const {itemId} = useParams()

    useEffect(()=>{
      //prendo el loader
      setLoading(true)
        //llamamos a la promesa
        getItem(itemId)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    },[])

  return (
    <div>
        {loading ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailContainer