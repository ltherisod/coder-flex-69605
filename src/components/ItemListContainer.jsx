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

    //  console.log(products)
    // const[text, setText]=useState('')
    //  //pROMISE
    // let error= false
    //     const data = new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             if(error){
    //                 reject('No hay mas milanesas')
    //             }else{
    //                 resolve('Disfrute de una rica milanesa con papas 🤭')
    //             }
    //         },2000)
    //     })

    //     console.log(data, 'promise')

    //     useEffect(()=>{
    //         data.then((res)=> setText(res))
    //         .catch((error)=> console.error(error))
    //     },[])

    // const {greeting} = props
    return(
        <div>
            <h1 className="text-success">{greeting}</h1>
            <ItemList products={products}/>
            {/* <p>{text}</p> */}
            {/* en una sola linea no escribo return */}
            {/* {products.map((prod)=><div key={prod.id}>
                <img src={prod.img} alt={prod.name}/>
                <p>{prod.name}</p>
                <p>${prod.price},00</p>
            </div>)} */}
            {/* con parentesis no esribo return */}
            {/* {products.map((prod)=>(
                <div key={prod.id}>
                <img src={prod.img} alt={prod.name}/>
                <p>{prod.name}</p>
                <p>${prod.price},00</p>
            </div>
            ))} */}
    {/* Con llaves tengo que escribir return */}
                {/* {products.map((prod)=>{
                return(
                    <div key={prod.id}>
                                <img src={prod.img} alt={prod.name}/>
                                <p>{prod.name}</p>
                                <p>${prod.price},00</p>
                            </div>
                )      
                }
                            )} */}
        </div>
    )
}

export default ItemListContainer