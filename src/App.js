import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer"
import ItemCount from "./Components/itemCount/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={`Bienvenidos a Sneakers.GG`} />
      <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log(`cantidad`, cantidad)}/>
      <Footer/>
    </>
  );
}

export default App;
