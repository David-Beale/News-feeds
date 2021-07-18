import React from "react";
import Headline from "./headline/headline";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHeadlines } from "./useHeadlines";

export default function HeadlinesList() {
  const headlines = useSelector(({ headlines }) => headlines.headlines);

  useHeadlines();

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
