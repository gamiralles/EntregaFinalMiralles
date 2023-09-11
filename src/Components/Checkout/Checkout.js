import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useCart } from "../Context/CartContext";
import { db } from "../../Service/Firebase/FirebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCheckout from "../FormCheckout/FormCheckout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();

  const pagInicio = useNavigate();

  const createOrder = async ({ name, phone, email, direction }) => {
    setLoading(true);
    const objOrder = {
      comprador: {
        name,
        phone,
        email,
        direction,
      },
      items: cart,
      total,
    };
    try {
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);

      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const ordersRef = collection(db, "orders");
        const { id } = await addDoc(ordersRef, objOrder);
        const notify = () => {
          toast.success(`Gracias por su compra! \n Orden n°: ${id}`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        };
        console.log("la orden se genero n°:" + id);
        notify();
        clearCart();
        pagInicio(`/`);
      } else {
        const notifyError = () => {
          toast.error("Error al cargar su orden", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        };
        console.log("hubo un error en la generacion de la orden");
        notifyError();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loaderContainer">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <FormCheckout checkConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
