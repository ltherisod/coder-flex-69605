import { useEffect, useState } from "react"
import {getProducts} from '../mock/asyncMock'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
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
            console.log(list)
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])






    //PROMESA
    //     //Tiene que estar a la escucha del cambio
    //  useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(categoryId){
    //             //filtrar
    //             setProducts(res.filter((prod)=> prod.category === categoryId ))
    //         }else{
    //             //no filtro
    //             setProducts(res)
    //         }
    //     })
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setLoading(false))
    //  },[categoryId])

 
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