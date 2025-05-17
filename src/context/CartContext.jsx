import { createContext, useState } from "react";


//Creamos el contexto

export const CartContext = createContext()

//crear nuestro proveedor
export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])

    //FUNCIONES QUE MODIFIQUEN EL ARRAY DEL CARRITO

    //agregar un item al carrito

    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
            //sumar cantidades
            //logica para sumar cantidades
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    //sumar cantidades
                    return{...prod, quantity: prod.quantity + cantidad}
                }else{
                    //retorno el prod sin modificar
                    return prod
                }
            })

            //actualizar el carrito con su nuevo array
           setCart(updatedCart)
           //forma corta
            //    setCart(
            //     cart.map((prod)=>{
            //         if(prod.id === item.id){
            //             //sumar cantidades
            //             return{...prod, quantity: prod.quantity + cantidad}
            //         }else{
            //             //retorno el prod sin modificar
            //             return prod
            //         }
            //     })
            //    )
        }else{
            //se agrega el nuevo item al carrito
            setCart([...cart, {...item, quantity:cantidad}])
        }

    }

    //borrar todo el carrito
    const clear = () => {
        setCart([])
    }

    //eliminar un item por completo

    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //tiene que devolver un booleano si existe o no en el carrito

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}