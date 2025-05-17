import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { CartContext } from "../context/CartContext"

const CartWidgetReactIcons = () => {
    const{cart}=useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <Badge bg="danger">5</Badge>
            <BsCart4 fontSize={'1.8rem'} />
        </div>
    )
}
export default CartWidgetReactIcons