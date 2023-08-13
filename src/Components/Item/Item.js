import { Link } from "react-router-dom";

const Item = ({ id, img, name }) => {
  return (
    <div className="item">
      <img src={img} />
      <h3>{name}</h3>
      <Link to={`item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
