import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HeadlinesList from "./HeadlinesList/HeadlinesList";
import ExternalSite from "./ExternalSite/ExternalSite";

import { useHeadlines } from "./useHeadlines";

const SiteBodyContainer = styled.div`
  padding-top: 75px;
  position: relative;
  z-index: 0;
  overflow-y: scroll;
`;

export default function SiteBody() {
  useHeadlines();
  const showHtml = useSelector(({ addFeed }) => addFeed.showHtml);
  return (
    <SiteBodyContainer id={"headlines-container"}>
      {showHtml ? <ExternalSite /> : <HeadlinesList />}
    </SiteBodyContainer>
  );
}
