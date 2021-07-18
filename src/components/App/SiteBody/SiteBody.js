import React from "react";
import { useSelector } from "react-redux";
import HeadlinesList from "./HeadlinesList/HeadlinesList";
import ExternalSite from "./ExternalSite/ExternalSite";

export default function SiteBody() {
  const html = useSelector(({ addFeed }) => addFeed.html);
  return html ? <ExternalSite html={html} /> : <HeadlinesList />;
}
