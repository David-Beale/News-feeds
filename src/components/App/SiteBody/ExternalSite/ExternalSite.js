import React from "react";
import styled from "styled-components";
import renderHTML from "react-render-html";
import { useSelector } from "react-redux";

import { useOnClick } from "./useOnClick";

const ExternalSiteContainer = styled.div`
  margin: 36px;
`;

export default function ExternalSite() {
  const html = useSelector(({ addFeed }) => addFeed.html);

  const onClick = useOnClick();

  return (
    <ExternalSiteContainer id="externalMaster" onClick={onClick}>
      {renderHTML(html)}
    </ExternalSiteContainer>
  );
}
