import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
