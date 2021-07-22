import React from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteHeadline } from "../../../../../../../redux/headlines";

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  left: 305px;
  color: black;
  &:hover {
    color: red;
  }
`;
export default function Delete({ id }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.stopPropagation();
    dispatch(deleteHeadline(id));
  };
  return (
    <Container onClick={onClick}>
      <DeleteForeverIcon fontSize="small" />
    </Container>
  );
}
