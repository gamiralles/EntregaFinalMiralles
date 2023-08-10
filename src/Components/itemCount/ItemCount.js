import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="contador">
      <div className="controles">
        <button className="button" onClick={quitar}>-</button>
        <h4 className="numero">{cantidad}</h4>
        <button className="button" onClick={agregar}>+</button>
      </div>
      <div className="agregar">
        <button
          className="button"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
