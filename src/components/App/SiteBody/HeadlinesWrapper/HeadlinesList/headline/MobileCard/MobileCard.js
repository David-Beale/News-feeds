import React from "react";
import moment from "moment";

import {
  MobileContainer,
  MobileImage,
  MobileTextContainer,
  MobileTitle,
  MobileSummary,
  MobileName,
  MobileDateContainer,
} from "./MobileCardStyle";

import Delete from "../Delete/Delete";

export default function MobileCard({ headline }) {
  return (
    <MobileContainer onClick={() => window.open(headline.link, "_blank")}>
      <MobileImage src={headline.image} />
      <MobileTextContainer>
        <MobileTitle>{headline.title}</MobileTitle>
        <MobileSummary>{headline.summary}</MobileSummary>
      </MobileTextContainer>
      <MobileName>{headline.name}</MobileName>
      <Delete isDesktop={false} id={headline.id}></Delete>
      <MobileDateContainer>
        {moment(headline.date).format("D MMM YYYY")}
      </MobileDateContainer>
    </MobileContainer>
  );
}
