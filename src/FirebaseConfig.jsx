import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJDVMR1KEGdpIGurz-QRM2jLGI2JJqRmA",
  authDomain: "lms-react-c6381.firebaseapp.com",
  projectId: "lms-react-c6381",
  storageBucket: "lms-react-c6381.firebasestorage.app",
  messagingSenderId: "879121305198",
  appId: "1:879121305198:web:d45b2c97781f6dbcd6207f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth