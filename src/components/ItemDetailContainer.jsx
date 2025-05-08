import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})
const {itemId} = useParams()

    useEffect(()=>{
        //llamamos a la promesa
        getItem(itemId)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer