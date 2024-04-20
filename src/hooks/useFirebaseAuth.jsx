import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getUser } from "../features/users/api/getUser";

export const useFirebaseAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [ userId, setUserId ] = useState();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      const user = result.user;
      setCurrentUser(user);
      return user;
    }
  };

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
  };

  const logout = async () => {
    await signOut(auth).then(clear);
    navigate("/", { state: {message: "ログアウトしました"}});
  };

  const nextOrObserver = async (user) => {
    if (!user) {
      setLoading(false);
      setCurrentUser(null);
      setUserId(null);
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
        const userData = await getUser(currentUser);
        setUserId(userData.id)
      }
      fetchUserData();
    }
  }, [currentUser])


  return {
    currentUser,
    loading,
    loginWithGoogle,
    logout,
    userId
  };
}