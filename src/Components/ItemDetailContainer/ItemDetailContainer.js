import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMocks";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
    .then((respuesta) => {
      setProduct(respuesta);
    });
  }, [itemId]);

  return (
    <div className="detailcontainer">
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;