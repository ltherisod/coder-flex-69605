import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"

const CartWidgetReactIcons = () => {
    return(
        <div>
            <Badge bg="danger">5</Badge>
            <BsCart4 fontSize={'1.8rem'} />
        </div>
    )
}
export default CartWidgetReactIcons