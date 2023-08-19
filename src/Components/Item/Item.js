import { useNavigate } from "react-router-dom";


const Item = ({ id, img, name }) => {
  const nav = useNavigate()
  return (
    <div className="item" onClick={() => nav(`/item/${id}`)}>
      <img src={img} />
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
