import React from "react";
import Headline from "./headline/headline";
import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeadlines } from "../../../redux/headlines";

export default function HeadlinesList() {
  const dispatch = useDispatch();
  const headlines = useSelector(({ headlines }) => headlines.headlines);

  useEffect(() => {
    dispatch(getHeadlines());
  }, [dispatch]);

  return (
    <div className="list__container">
      {!headlines ? (
        <div className="no-content-container">No headlines</div>
      ) : headlines.length === 0 ? (
        <div className="no-content-container">
          <CircularProgress />
        </div>
      ) : (
        headlines.map((headline) => {
          return <Headline key={headline.id} headline={headline} />;
        })
      )}
    </div>
  );
}
