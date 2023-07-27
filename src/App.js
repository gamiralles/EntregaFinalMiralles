import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={`Bienvenidos`} />
    </>
  );
}

export default App;
