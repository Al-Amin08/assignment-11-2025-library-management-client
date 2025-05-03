import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // google provider
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://assignment-11-server-2025.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            setLoading(false);
          })
          .catch((err) => {
            // .error("JWT request error:", err);
            setLoading(false); // Ensure loading stops even on failure
          });
      } else {
        axios
          .post(
            "https://assignment-11-server-2025.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setLoading(false);
          })
          .catch((err) => {
            // .error("JWT request error:", err);
            setLoading(false); // Ensure loading stops even on failure
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    setUser,
    signInUser,
    logOut,
    loading,
    setLoading,
    auth,
    googleProvider,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
