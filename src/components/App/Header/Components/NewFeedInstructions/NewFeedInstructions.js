import React from "react";
import { useSelector } from "react-redux";

import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { Text, Container } from "./NewFeedInstructionsStyle";

const message = {
  1: "Select a title",
  2: "Select a summary (optional)",
  3: "Select an image (optional)",
  4: "Select a link (optional)",
};
export default function NewFeedInstructions({ isDesktop }) {
  const status = useSelector(({ addFeed }) => addFeed.status);

  return (
    <Container isDesktop={isDesktop}>
      <PrevButton disabled={status === 1} />
      <Text>{message[status]}</Text>
      <NextButton disabled={status === 1} />
    </Container>
  );
}
