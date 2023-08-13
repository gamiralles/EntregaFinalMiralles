import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const asyncFunction = categoryId ? getProductByCategory : getProducts
    
    asyncFunction(categoryId)
    .then(response => {
      setProductos(response)
    })
  }, [categoryId]);

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
