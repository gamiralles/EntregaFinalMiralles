import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import { useAsync } from "../Hooks/useAsync";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const asyncFunction = () => getProductById(itemId);

  const { data: product, error, loading } = useAsync(asyncFunction, [itemId]);

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
    <div className="detailcontainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
