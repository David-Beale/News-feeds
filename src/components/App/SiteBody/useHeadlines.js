import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subscribeToHeadlines } from "../../../redux/headlines";

export const useHeadlines = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subscribeToHeadlines());
  }, [dispatch]);
};
