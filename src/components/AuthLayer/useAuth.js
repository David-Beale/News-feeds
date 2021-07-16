import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import { auth } from "./firebase";
import AuthMain from "../Auth/AuthMain";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const init = useRef(false);

  const signUp = (username, password) => {
    return auth.createUserWithEmailAndPassword(username, password);
  };
  const signIn = (username, password) => {
    return auth.signInWithEmailAndPassword(username, password);
  };
  const signOut = () => {
    return auth.signOut();
  };
  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };
  const confirmNewPassword = (code, password) => {
    return auth.confirmPasswordReset(code, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setUser(user);
      if (init.current && user) {
        setTimeout(() => {
          setIsAuth(true);
        }, 750);
        return;
      }
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      init.current = true;
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    forgotPassword,
    confirmNewPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && (!isAuth ? <AuthMain /> : children)}
    </AuthContext.Provider>
  );
};
