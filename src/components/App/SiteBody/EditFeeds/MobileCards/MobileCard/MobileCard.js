import React from "react";
import moment from "moment";

import {
  MobileContainer,
  MobileTitle,
  Row,
  DeleteContainer,
} from "./MobileCardStyle";

import Delete from "../../Delete";

export default function MobileCard({ scraper }) {
  return (
    <MobileContainer>
      <MobileTitle>{scraper.name}</MobileTitle>
      <Row>
        <div>Last Scraped</div>
        <div>{moment(scraper.lastScrape).format("HH:mm D/MM/YY")}</div>
      </Row>
      <Row>
        <div>Feed active?</div>
        <div>{scraper.scrapeFail === true ? "❌" : "✔"}</div>
      </Row>
      <DeleteContainer>
        <Delete id={scraper.id}></Delete>
      </DeleteContainer>
    </MobileContainer>
  );
}
