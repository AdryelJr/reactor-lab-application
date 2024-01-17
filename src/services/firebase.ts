import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1rG4CyQ0xJ5LgpxBY-Cb48--viYoGESQ",
  authDomain: "reactor-lab.firebaseapp.com",
  databaseURL: "https://reactor-lab-default-rtdb.firebaseio.com",
  projectId: "reactor-lab",
  storageBucket: "reactor-lab.appspot.com",
  messagingSenderId: "375083205713",
  appId: "1:375083205713:web:4b6a224ff78d20567f2470"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app)

export { app, auth, database }
