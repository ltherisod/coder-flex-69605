import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})

    useEffect(()=>{
        //llamamos a la promesa
        getItem('03')
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