import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbApi } from "../../../../api/firebase";
import { addHeadline, noHeadlines } from "../../../../redux/headlines";

export const useHeadlines = () => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) return;
    const unsubscribe = dbApi
      .collection("userFeeds")
      .doc(user)
      .collection("headlines")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        if (!querySnapshot.size) {
          dispatch(noHeadlines());
          return;
        }
        querySnapshot.forEach((doc) => {
          dispatch(addHeadline({ id: doc.id, ...doc.data() }));
        });
      });

    return unsubscribe;
  }, [dispatch, user]);
};
