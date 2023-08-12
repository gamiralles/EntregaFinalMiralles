import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ name, img, price, category, stock, description }) => {
  return (
    <div className="detail">
          <img src={img} />
          <h3>{name}</h3>
          <h5>{category}</h5>
          <h4>${price}</h4>
          <h3>{description}</h3>
          <h6>stock:{stock}</h6>
        <ItemCount
          inicial={0}
          stock={stock}
          onAdd={(cantidad) => console.log("cantidad Agregada", cantidad)}
        />
    </div>
  );
};

export default ItemDetail;
