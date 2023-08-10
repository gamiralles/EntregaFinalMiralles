const Item = ({ img, name, category, price }) => {
  return (
    <div className="item">
      <img src={img} />
      <h3>{name}</h3>
      <a href="">Ver Detalles</a>
    </div>
  );
};

export default Item;
