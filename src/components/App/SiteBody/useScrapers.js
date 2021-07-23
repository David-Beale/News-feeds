import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subscribeToScrapers } from "../../../redux/scrapers";

export const useScrapers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subscribeToScrapers());
  }, [dispatch]);
};
