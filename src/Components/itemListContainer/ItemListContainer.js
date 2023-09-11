import React from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../Hooks/useAsync";
import ItemGrid from "../ItemGrid/ItemGrid";

import { getProducts } from "../../Service/Firebase/Firestore/products";

const ItemListContainer = () => {

  const { categoryId } = useParams();

  const getProductCategory = () => getProducts(categoryId)

  const {
    data: productos,
    error,
    loading,
  } = useAsync(getProductCategory, [categoryId]);

  if (loading) {
    return (
      <div className="loaderContainer">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <h1>404 NOT FOUND</h1>;
  }

  return (
    <div>
      <ItemGrid productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
