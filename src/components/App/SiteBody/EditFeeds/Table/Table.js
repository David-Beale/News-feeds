import React from "react";
import { useSelector } from "react-redux";
import { selectAllScrapers } from "../../../../../redux/scrapers";

import TableData from "./TableData/TableData";
import TableHeader from "./TableHeader/TableHeader";

import { StyledTable } from "./TableStyle";

import { useColumns } from "./useColumns";

export default function Table() {
  const columns = useColumns();
  const scrapers = useSelector(selectAllScrapers);
  return (
    <StyledTable>
      <TableHeader columns={columns} />
      {scrapers.map((scraper) => (
        <TableData key={scraper.id} columns={columns} scraper={scraper} />
      ))}
    </StyledTable>
  );
}
