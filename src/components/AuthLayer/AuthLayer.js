import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthMain from "./Auth/AuthMain";
import { authApi } from "../../api/firebase";
import { authorise, deauthorise, setUser } from "../../redux/auth";

export default function AuthLayer({ children }) {
  const dispatch = useDispatch();

  const isAuth = useSelector(({ auth }) => auth.isAuth);

  const [loading, setLoading] = useState(true);
  const init = useRef(false);

  useEffect(() => {
    const unsubscribe = authApi.onAuthStateChanged((user) => {
      setLoading(false);
      dispatch(setUser(user?.uid));

      if (init.current && user) {
        //timeout to allow for animation
        setTimeout(() => {
          dispatch(authorise());
        }, 750);
        return;
      }
      if (user) {
        dispatch(authorise());
      } else {
        dispatch(deauthorise());
      }
      init.current = true;
    });
    return unsubscribe;
  }, [dispatch]);

  return <>{!loading && (!isAuth ? <AuthMain /> : children)}</>;
}
