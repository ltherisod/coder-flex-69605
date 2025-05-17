import { useEffect, useState } from "react"
import {getProducts} from '../mock/asyncMock'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import LoaderComponent from "./LoaderComponent"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId}= useParams()

        //Tiene que estar a la escucha del cambio
     useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if(categoryId){
                //filtrar
                setProducts(res.filter((prod)=> prod.category === categoryId ))
            }else{
                //no filtro
                setProducts(res)
            }
        })
        .catch((error)=> console.error(error))
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