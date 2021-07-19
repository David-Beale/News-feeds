import React from "react";
import { useDispatch } from "react-redux";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Tooltip } from "@material-ui/core";

import { StyledIconButton } from "../../HeaderStyle";
import { nextStatus } from "../../../../../redux/addFeed";

export default function NextButton({ disabled }) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(nextStatus());
  return (
    <Tooltip title="Next">
      <StyledIconButton onClick={onClick} disabled={disabled}>
        <SkipNextIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
