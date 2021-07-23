import React from "react";
import moment from "moment";
import { Row, TableCell, AlignCenter } from "../TableStyle";
import Delete from "../../Delete";

const transformData = (dataType, data) => {
  switch (dataType) {
    case "name":
      return data;
    case "lastScrape":
      return moment(data).format("HH:mm D/MM/YY");
    case "scrapeFail":
      return <AlignCenter>{data === true ? "❌" : "✔"}</AlignCenter>;
    case "id":
      return (
        <AlignCenter>
          <Delete id={data} />
        </AlignCenter>
      );
    default:
      return;
  }
};

export default function TableData({ columns, scraper }) {
  return (
    <Row>
      {columns.map((column, index) => (
        <TableCell
          key={scraper.id + index}
          width={column.width}
          minWidth={column.minWidth}
        >
          {transformData(column.data, scraper[column.data])}
        </TableCell>
      ))}
    </Row>
  );
}
