import Carrito from "../../Assets/shopping-cart.png"
import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart()
  return (
    <div className="carrito">
      <Link>
        <img src={Carrito} alt="Carrito"/>
        {totalQuantity}
      </Link>
    </div>
  )
}

export default CartWidget