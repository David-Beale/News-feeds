import React from "react";
import { useSelector } from "react-redux";
import HeadlinesList from "./HeadlinesWrapper/HeadlinesWrapper";
import ExternalSite from "./ExternalSite/ExternalSite";
import EditFeeds from "./EditFeeds/EditFeeds";

import { useHeadlines } from "./useHeadlines";
import { useScrapers } from "./useScrapers";

export default function SiteBody() {
  useHeadlines();
  useScrapers();
  const showHtml = useSelector(({ addFeed }) => addFeed.showHtml);
  const showEditFeeds = useSelector(({ scrapers }) => scrapers.editFeeds);
  return (
    <>
      {showHtml ? (
        <ExternalSite />
      ) : showEditFeeds ? (
        <EditFeeds />
      ) : (
        <HeadlinesList />
      )}
    </>
  );
}
