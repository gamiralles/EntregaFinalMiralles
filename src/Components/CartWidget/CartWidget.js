import Carrito from "../../Assets/shopping-cart.png"

function CartWidget() {
  return (
    <div className="carrito">
        <img src={Carrito} alt="Carrito"/>
        <p>0</p>
    </div>
  )
}

export default CartWidget