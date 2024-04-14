import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getUser } from "../features/users/api/getUser";

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

  const logout = async () => {
    await signOut(auth).then(clear());
    navigate("/", { state: {message: "ログアウトしました"}});
  };

  const nextOrObserver = async (user) => {
    if (!user) {
      setLoading(false);
      setCurrentUser(null);
      return;
    }

    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser) {
      const fetchUserData = async () => {
        const user = await getUser(currentUser);
        currentUser.id = user.id;
      }
      fetchUserData();
    }
  }, [currentUser])


  return {
    currentUser,
    loading,
    loginWithGoogle,
    logout,
  };
}