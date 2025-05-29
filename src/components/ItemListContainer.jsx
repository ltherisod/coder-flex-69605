import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import LoaderComponent from "./LoaderComponent"
import {  collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId}= useParams()


    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //conectar con nuestra colleccion
        const productsCollection = categoryId ? query(collection(db,"productos"), where("category" ,"==", categoryId )):collection(db,"productos")
        //pedir los documentos
        getDocs(productsCollection)
        .then((res)=>{
            console.log(res.docs)
            //limpiar los datos para utilizar
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])





   
 
    return(
        <>
       { loading 
        ? <LoaderComponent/> 
            :<div>
                <h1 className="text-success">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
                <ItemList products={products}/>
            </div>
            }        
        </>
    )
}

export default ItemListContainer