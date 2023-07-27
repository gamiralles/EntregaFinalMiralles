import Carrito from "../../Assets/shopping-cart.png"

function CartWidget() {
  return (
    <div>
        <img src={Carrito} alt="Carrito" className="carrito"/>
        0
    </div>
  )
}

export default CartWidget