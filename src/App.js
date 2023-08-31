import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context/CartContext";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route
              path="category/:categoryId/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
