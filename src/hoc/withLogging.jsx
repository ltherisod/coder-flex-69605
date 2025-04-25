import { useEffect } from "react"

//Esta es la funcion del HOC
const withLogging = (WrappedComponent) => {

    //Este es el nuevo componente que se crea
    const ComponentWithLoggin = (props) =>{

        //Este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó`)
        },[])

        //Mostrando el comoponente original con todas sus props
        return <WrappedComponent {...props}/>
    }

    //Devolvemos el nuevo componente

    return ComponentWithLoggin
}

export default withLogging