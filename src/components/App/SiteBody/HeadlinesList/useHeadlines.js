import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dbApi } from "../../../../api/firebase";
import { addHeadline, noHeadlines } from "../../../../redux/headlines";

export const useHeadlines = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = dbApi
      .collection("userFeeds")
      .doc("IJcD4g22XOU2IDzppT9FxmU88F93")
      .collection("headlines")
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
  }, [dispatch]);
};
