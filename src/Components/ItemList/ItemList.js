import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlist">
      {productos.map((prd) => {
        return <Item key={prd.id} {...prd} />;
      })}
    </div>
  );
};

export default ItemList;
