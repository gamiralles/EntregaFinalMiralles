import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={`Bienvenidos`}/>}/>
        <Route path="category/:categoryId" element={<ItemListContainer />}/>
        <Route path="item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="category/:categoryId/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
