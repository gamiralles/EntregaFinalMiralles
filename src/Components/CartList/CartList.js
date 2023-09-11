const CartList = ({ name, img, price, quantity }) => {

  return (
    <div className="carritoContainer">
      <div>
        <img src={img} alt="foto" />
      </div>
      <div className="cartText">
        <h1>{name}</h1>
        <h3>${price}</h3>
        <h3>cantidad: {quantity}</h3>
        <h3>subtotal: {quantity * price}</h3>
      </div>
    </div>
  );
};

export default CartList;
