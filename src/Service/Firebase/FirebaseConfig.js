import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEF4EbRDtsc_R9M9GGqlWyd15KqPo4fhc",
  authDomain: "proyectofinal-miralles.firebaseapp.com",
  projectId: "proyectofinal-miralles",
  storageBucket: "proyectofinal-miralles.appspot.com",
  messagingSenderId: "751216328393",
  appId: "1:751216328393:web:3ac186bd4165ca2f9ad718"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)