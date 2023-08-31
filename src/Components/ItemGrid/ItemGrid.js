import Item from "../Item/Item";

const ItemGrid = ({ productos }) => {
  return (
    <div className="itemgrid">
      {productos.map((prd) => {
        return <Item key={prd.id} {...prd} />;
      })}
    </div>
  );
};

export default ItemGrid;