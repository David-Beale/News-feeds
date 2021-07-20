import React from "react";
import Card from "./headline/Card";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHeadlines } from "./useHeadlines";

import { ListContainer, NoContent } from "./HeadlinesListStyle";
import { selectAllHeadlines } from "../../../../redux/headlines";

export default function HeadlinesList() {
  const headlines = useSelector(selectAllHeadlines);
  const loading = useSelector(({ headlines }) => headlines.loading);

  useHeadlines();

  return (
    <ListContainer>
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
