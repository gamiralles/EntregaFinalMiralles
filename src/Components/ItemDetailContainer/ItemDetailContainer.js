import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMocks";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <div className="spinnerContainer">
      <div className="spinner">
        
      </div>
    </div>
  }

  if(error) {
    return <h1>404 NOT FOUND</h1>
  }

  return (
    <div className="detailcontainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
