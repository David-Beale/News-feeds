import React from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteHeadline } from "../../../../../../../redux/headlines";

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  right: ${(props) => (props.isDesktop ? "35px" : "calc(50% - 5px)")};
  color: black;
  &:hover {
    color: red;
  }
`;
export default function Delete({ id, isDesktop }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.stopPropagation();
    dispatch(deleteHeadline(id));
  };
  return (
    <Container isDesktop={isDesktop} onClick={onClick}>
      <DeleteForeverIcon fontSize="small" />
    </Container>
  );
}
