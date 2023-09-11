import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import { useCart } from "../Context/CartContext";

const CartContainer = () => {
  const { cart, total, clearCart } = useCart();

  return (
    <div className="cartContainer">
      {cart.map((prod) => {
        return <CartList key={prod.id} {...prod} />;
      })}
      <h1>Total: ${total}</h1>
      <div className="cartButton">
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Finaliza Compra</button>
      </Link>
      </div>
    </div>
  );
};

export default CartContainer;
