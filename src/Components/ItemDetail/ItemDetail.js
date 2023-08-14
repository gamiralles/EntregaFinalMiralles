import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ name, img, imga, price, category, stock, description }) => {
  return (
    <div className="contenedor">
      <div className="image">
        <img src={img} />
        <img src={imga} />
      </div>
      <div className="detail">
        <h1>{name}</h1>
        <h6>Categoria: {category}</h6>
        <h4>$ {price}</h4>
        <h6>{description}</h6>
        <h6>stock:{stock}</h6>
        <div className="carritoDetail">
        <ItemCount
          inicial={0}
          stock={stock}
          onAdd={(cantidad) => console.log("cantidad Agregada", cantidad)}
          />
          </div>
      </div>
    </div>
  );
};

export default ItemDetail;
