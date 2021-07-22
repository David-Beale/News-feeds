import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { selectAllHeadlines } from "../../../../redux/headlines";

import { ListContainer, NoContent } from "./HeadlinesWrapperStyle";

import HeadlinesList from "./HeadlinesList/HeadlinesList";

export default function HeadlinesWrapper() {
  const headlines = useSelector(selectAllHeadlines);
  const loading = useSelector(({ headlines }) => headlines.loading);

  return (
    <>
      {loading ? (
        <ListContainer id="list-container">
          <CircularProgress />
        </ListContainer>
      ) : headlines.length ? (
        <HeadlinesList headlines={headlines} />
      ) : (
        <ListContainer id="list-container">
          <NoContent>No headlines yet</NoContent>
        </ListContainer>
      )}
    </>
  );
}
