import { useState } from "react";
import { useCart } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  name,
  img,
  imga,
  price,
  category,
  stock,
  description,
}) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    console.log(quantity);
    setQuantity(quantity);

    const objProduct = {
      id,
      name,
      img,
      price,
      quantity,
    };

    addItem(objProduct);
  };
  return (
    <div className="contenedor">
      <div className="image">
        <img src={img} />
        <img src={imga} />
      </div>
      <div className="detail">
        <h1>{name}</h1>
        <h6>Categoria: {category}</h6>
        <h4>$ {price}</h4>
        <h6>{description}</h6>
        <h6>stock:{stock}</h6>
        <div className="carritoDetail">
          {quantity == 0 ? (
            stock > 0 ? (
              <ItemCount stock={stock} onAdd={handleOnAdd} />
            ) : ( 
              <h4>Sin Stock</h4>
            )
          ) : (
            <Link to="/cart">
              <button className="button">Ir al Carrito</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
