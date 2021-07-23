import React from "react";

import { Row, TableHeaderCell } from "../TableStyle";

export default function TableHeader({ columns }) {
  return (
    <Row>
      {columns.map((column) => (
        <TableHeaderCell width={column.width} minWidth={column.minWidth}>
          {column.name}
        </TableHeaderCell>
      ))}
    </Row>
  );
}
