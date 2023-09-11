import Carrito from "../../Assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart();
  return (
    <div className="carrito">
      <div>
        <Link to={"/cart"}>
          <img src={Carrito} alt="Carrito" />
        </Link>
      </div>
      <div className="total">{totalQuantity}</div>
    </div>
  );
}

export default CartWidget;
