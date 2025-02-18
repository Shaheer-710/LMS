import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJDVMR1KEGdpIGurz-QRM2jLGI2JJqRmA",
  authDomain: "lms-react-c6381.firebaseapp.com",
  databaseURL: "https://lms-react-c6381-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lms-react-c6381",
  storageBucket: "lms-react-c6381.firebasestorage.app",
  messagingSenderId: "879121305198",
  appId: "1:879121305198:web:d45b2c97781f6dbcd6207f"
};

const app = initializeApp(firebaseConfig);

export default app;