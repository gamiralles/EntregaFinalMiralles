import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting={`Bienvenidos`} />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
