// src/firebaseAuth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
