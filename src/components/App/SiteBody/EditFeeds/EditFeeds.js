import React from "react";
import { useMediaQuery } from "@material-ui/core";

import Table from "./Table/Table";
import MobileCards from "./MobileCards/MobileCards";

import { Container } from "./EditFeedsStyle";

export default function EditFeeds() {
  const isDesktop = useMediaQuery("(min-width:700px)");
  return (
    <Container id="table-container">
      {isDesktop ? <Table /> : <MobileCards />}
    </Container>
  );
}
