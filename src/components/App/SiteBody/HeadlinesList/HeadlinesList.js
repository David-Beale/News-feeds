import React, { useEffect, useRef } from "react";
import Card from "./headline/Card";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import { ListContainer, NoContent } from "./HeadlinesListStyle";
import { selectAllHeadlines } from "../../../../redux/headlines";

export default function HeadlinesList() {
  const ref = useRef();
  const headlines = useSelector(selectAllHeadlines);
  const loading = useSelector(({ headlines }) => headlines.loading);

  useEffect(() => {
    document.getElementById("headlines-container").scrollTo(0, 0);
  }, [headlines]);

  return (
    <ListContainer ref={ref}>
      {loading ? (
        <CircularProgress />
      ) : headlines.length ? (
        headlines.map((headline) => {
          return <Card key={headline.id} headline={headline} />;
        })
      ) : (
        <NoContent>No headlines yet</NoContent>
      )}
    </ListContainer>
  );
}
