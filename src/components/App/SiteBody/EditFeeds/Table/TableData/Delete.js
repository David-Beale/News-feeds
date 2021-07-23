import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteScraper } from "../../../../../../redux/scrapers";

export const StyledDelete = styled(DeleteForeverIcon)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export default function Delete({ id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteScraper(id));
  };
  return <StyledDelete onClick={onClick} />;
}
