import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const getProducts = (categoryId) => {
  const productsRef = !categoryId
    ? collection(db, "products")
    : query(collection(db, "products"), where("category", "==", categoryId));

  return getDocs(productsRef)
    .then((querySnapshot) => {
      const productsAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });

      return productsAdapted;
    })
    .catch((error) => {
      return error;
    });
};

export const getProduct = (itemId) => {
  const productRef = doc(db, "products", itemId);

  return getDoc(productRef)
    .then((querySnapshot) => {
      const fields = querySnapshot.data();
      const productAdapted = { id: querySnapshot.id, ...fields };

      return productAdapted;
    })
    .catch((error) => {
      return error;
    });
};
