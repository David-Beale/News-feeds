import React from "react";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { Tooltip } from "@material-ui/core";
import { StyledIconButton } from "../../HeaderStyle";
import { useDispatch } from "react-redux";
import { prevStatus } from "../../../../../redux/addFeed";

export default function NextButton({ disabled }) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(prevStatus());
  return (
    <Tooltip title="Back">
      <StyledIconButton onClick={onClick} disabled={disabled}>
        <SkipPreviousIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
