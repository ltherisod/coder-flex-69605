import { useEffect, useState } from "react"
import {getProducts} from '../mock/asyncMock'
import ItemList from "./ItemList"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
     console.log('itemlistcontainer')


     useEffect(()=>{
        getProducts()
        .then((res)=> setProducts(res))
        .catch((error)=> console.error(error))
     },[])

 
    return(
        <div>
            <h1 className="text-success">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer