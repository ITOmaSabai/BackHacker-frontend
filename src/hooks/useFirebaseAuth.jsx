import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const useFirebaseAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      const user = result.user;

      navigate("/");
      return user;
    }
  };

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
  };

  const logout = () => {
    signOut(auth).then(clear);
    navigate("/");
  };

  const nextOrObserver = async (user) => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  return {
    currentUser,
    loading,
    loginWithGoogle,
    logout,
  };
}