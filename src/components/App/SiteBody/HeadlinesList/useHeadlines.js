import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dbApi } from "../../../../api/firebase";

export const useHeadlines = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = dbApi
      .collection("userFeeds")
      .doc("IJcD4g22XOU2IDzppT9FxmU88F93")
      .collection("headlines")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });

    return unsubscribe;
  }, [dispatch]);
};
