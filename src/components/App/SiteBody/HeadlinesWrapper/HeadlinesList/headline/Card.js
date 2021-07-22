import React from "react";
import moment from "moment";

import {
  Container,
  Image,
  TextContainer,
  Title,
  Summary,
  Name,
  DateContainer,
} from "./CardStyle";

export default function Card({ headline }) {
  return (
    <Container onClick={() => window.open(headline.link, "_blank")}>
      <Image src={headline.image} />
      <Name>{headline.name}</Name>
      <TextContainer>
        <Title>{headline.title}</Title>
        <Summary>{headline.summary}</Summary>
      </TextContainer>
      <DateContainer>
        {moment(headline.date).format("D MMM YYYY")}
      </DateContainer>
    </Container>
  );
}
