import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../Service/Firebase/Firestore/products";
import { useParams } from "react-router-dom";
import { useAsync } from "../Hooks/useAsync";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const getProdcutById = () => getProduct(itemId);

  const { data: product, loading, error } = useAsync(getProdcutById, [itemId]);

  if (loading) {
    return (
      <div className="loaderContainer">
        <span className="loader"></span>
      </div>
    );
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
