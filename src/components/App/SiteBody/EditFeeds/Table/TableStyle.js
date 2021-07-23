import styled from "styled-components";

const topShadow = "#cbced1";
const bottomShadow = "#ffffff";

export const StyledTable = styled.div`
  max-width: calc(100vw - 20px);
  box-shadow: 13px 13px 20px ${topShadow}, -13px -13px 20px ${bottomShadow};
  border-radius: 10px 10px 0px 0px;
  overflow-x: auto;
`;
const Cell = styled.div`
  width: ${(props) => props.width}px;
  min-width: ${(props) => props.minWidth}px;
  text-align: left;
  overflow: hidden;
  padding: 15px;
  &:not(:last-child) {
    border-right: 2px solid white;
  }
`;

export const TableHeaderCell = styled(Cell)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  border-bottom: 1px solid;
`;
export const TableCell = styled(Cell)`
  display: inline-block;
  font-size: 0.9rem;
  border-bottom: 1px solid white;
`;
export const Row = styled.div`
  min-height: 25px;
  display: flex;
`;
export const AlignCenter = styled.div`
  width: 100%;
  text-align: center;
`;
