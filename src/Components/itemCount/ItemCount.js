import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const quitar = () => {
    if (count > 0) setCount(count - 1);
  };



  return (
    <div className="contador">
      <div className="controles">
        <button className="button" onClick={quitar}>-</button>
        <h4 className="numero">{count}</h4>
        <button className="button" onClick={agregar}>+</button>
      </div>
      <div className="agregar">
        <button
          className="button"
          onClick={() => onAdd(count)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
