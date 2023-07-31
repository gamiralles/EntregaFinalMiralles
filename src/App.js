import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={`Bienvenidos a Sneakers.GG`} />
      <Footer/>
    </>
  );
}

export default App;
