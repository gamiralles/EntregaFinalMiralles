const Item = ({ img, name, category, price }) => {
  return (
    <div className="item">
      <img src={img} />
      <h2>{name}</h2>
      <p>{category}</p>
      <h2>${price}</h2>
    </div>
  );
};

export default Item;
