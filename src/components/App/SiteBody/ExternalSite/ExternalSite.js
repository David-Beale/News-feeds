import React from "react";
import styled from "styled-components";
import renderHTML from "react-render-html";
import { useSelector } from "react-redux";

import { useSearchNodes } from "./useSearchNodes";

const ExternalSiteContainer = styled.div`
  padding-top: 100px;
  position: relative;
  z-index: 0;
  height: 100vh;
  overflow-y: scroll;
`;

export default function ExternalSite() {
  const html = useSelector(({ addFeed }) => addFeed.html);

  const onClick = useSearchNodes();

  return (
    <ExternalSiteContainer id="externalMaster" onClick={onClick}>
      {renderHTML(html)}
    </ExternalSiteContainer>
  );
}
