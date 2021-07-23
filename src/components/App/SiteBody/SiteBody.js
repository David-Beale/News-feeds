import React from "react";
import { useSelector } from "react-redux";
import HeadlinesList from "./HeadlinesWrapper/HeadlinesWrapper";
import ExternalSite from "./ExternalSite/ExternalSite";

import { useHeadlines } from "./useHeadlines";
import { useScrapers } from "./useScrapers";

export default function SiteBody() {
  useHeadlines();
  useScrapers();
  const showHtml = useSelector(({ addFeed }) => addFeed.showHtml);
  return <>{showHtml ? <ExternalSite /> : <HeadlinesList />}</>;
}
