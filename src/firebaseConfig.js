
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpFtVy3hOyd9fmtrOBWxOtRIfo97ztjWE",
  authDomain: "healthmate-6a431.firebaseapp.com",
  projectId: "healthmate-6a431",
  storageBucket: "healthmate-6a431.firebasestorage.app",
  messagingSenderId: "638375117415",
  appId: "1:638375117415:web:56ba7de15e48196d448ac2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


