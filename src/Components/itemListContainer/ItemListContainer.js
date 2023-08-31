import React from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductByCategory } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import { useAsync } from "../Hooks/useAsync";
import ItemGrid from "../ItemGrid/ItemGrid";
import { useState } from "react";

const ItemListContainer = () => {
  const [displayGrid, setDisplayGrid] = useState(false);

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
      <div className="botones">
        <button onClick={() => setDisplayGrid(false)}>■■■</button>
        <button onClick={() => setDisplayGrid(true)}>≡≡≡­­­</button>
      </div>
      {displayGrid ? (
        <ItemList productos={productos} />
      ) : (
        <ItemGrid productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
