const Button = ({estilo, handler, text, children}) => {
// console.log(props)

//Destructuring de props
// const {estilo, handler, text} = props
// const ejemplo = (texto) => {
//     alert(texto)
// }
    return(
        // <button className={props.estilo} onClick={()=>ejemplo('Holis')}>{props.text}</button>
        // <button className={estilo} onClick={handler}>{text}</button>
        <button className={estilo} onClick={handler}>{text}{children}</button>
    )
}

export default Button 