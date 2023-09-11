import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({
  cart: [],
});

const notify = () =>
  toast.warn("Ya se encuentra agregado!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => {
        console.log(prev);
        return [...prev, productToAdd];
      });
    } else {
      console.error("Ya esta agregado");
      notify();
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });

    return total;
  };

  const total = getTotal();

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, totalQuantity, total, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
