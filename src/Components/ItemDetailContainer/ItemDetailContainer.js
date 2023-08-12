import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMocks";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("6")
    .then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <div className="detailcontainer">
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;