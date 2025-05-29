import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})
const [invalid, setInvalid]= useState(null)
const [loading, setLoading]= useState(false)
const {itemId} = useParams()

//FIREBASE

useEffect(()=>{
  setLoading(true)
  //conectar con nuestra collection
  const productCollection = collection(db, "productos")
  //creamos una referencia del documento
  const docRef = doc(productCollection, itemId)
  //FORMA CORTA
  //const docRef= doc(db, "productos", itemId)
  //traer el documento
  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      //guardar la data
      setDetail({id:res.id, ...res.data()})
    }else{
      //mostrar mensaje de error
      setInvalid(true)
    }
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
},[])




if(invalid){
  return(
    <div>
      <h2> El producto no existe! 😱</h2>
      <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}

  return (
    <div>
        {loading ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailContainer