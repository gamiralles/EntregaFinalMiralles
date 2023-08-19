import Carrito from "../../Assets/shopping-cart.png"
import { Link } from "react-router-dom"

function CartWidget() {
  return (
    <div className="carrito">
      <Link>
        <img src={Carrito} alt="Carrito"/>
      </Link>
    </div>
  )
}

export default CartWidget