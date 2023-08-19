import React from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductByCategory } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import { useAsync } from "../Hooks/useAsync";

const ItemListContainer = () => {

  const { categoryId } = useParams();

  const asyncFunction = categoryId
    ? () => getProductByCategory(categoryId)
    : () => getProducts();

  const {
    data: productos,
    error,
    loading,
  } = useAsync(asyncFunction, [categoryId]);

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
