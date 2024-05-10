import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getUsers } from "../features/users/api/getUsers";

export const useFirebaseAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [ userId, setUserId ] = useState();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      await nextOrObserver(result.user);
      return result.user;
    }
  };

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
    setUserId(null);
  };

  const logout = async () => {
    await signOut(auth).then(clear);
    navigate("/", { state: {message: "ログアウトしました"}});
  };

  // ユーザーのログイン状態を監視する関数
  const nextOrObserver = async (user) => {
    console.log("nextOrObserverが呼ばれました。userは", user)
    if (!user) {
      clear();
      return;
    }
    setCurrentUser(user);
    fetchUserData(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  // ログイン中のユーザーのidを取得する関数
  const fetchUserData = async (user) => {
    const usersData = await getUsers();
    const foundUser = await usersData.find(userData => userData.uid === user.uid);
    if (foundUser) {
      // console.log("foundUser", foundUser);
      // console.log("foundUser.id", foundUser.id);
      setUserId(foundUser.id);
    }
  }

  useEffect(() => {
    if(userId) {
      console.log("setされたuserId", userId);
    } else {
      console.log("setされたuserIdはnullです");
    }
  },[userId]);

  return {
    currentUser,
    loading,
    loginWithGoogle,
    logout,
    userId,
    nextOrObserver
  };
}