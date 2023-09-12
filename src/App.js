import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./Components/CartContainer/CartContainer";
import Checkout from "./Components/Checkout/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context/CartContext";
import { ToastContainer } from 'react-toastify';

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
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            <ToastContainer/>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
