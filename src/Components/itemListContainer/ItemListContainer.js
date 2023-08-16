import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductByCategory } from "../../asyncMocks";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  const asyncFunction = categoryId ? getProductByCategory : getProducts;

  useEffect(() => {
    setLoading(true);

    asyncFunction(categoryId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="spinnerContainer">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <h1>404 NOT FOUND</h1>;
  }

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
