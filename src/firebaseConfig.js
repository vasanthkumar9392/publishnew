// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAimimnecbAG59e-7SeNtqMfta4rpIeOPc",
  authDomain: "gothic-augury-426906-j6.firebaseapp.com",
  projectId: "gothic-augury-426906-j6",
  storageBucket: "gothic-augury-426906-j6.appspot.com",
  messagingSenderId: "34003200393",
  appId: "1:34003200393:web:eab7cd8ca1d7bfe92e9958",
  measurementId: "G-Q2CQ2Z2WMT"
};

const app = initializeApp(firebaseConfig);

export default app;
