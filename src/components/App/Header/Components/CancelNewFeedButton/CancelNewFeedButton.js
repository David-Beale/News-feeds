import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { reset } from "../../../../../redux/addFeed";
import { StyledIconButton, CancelButtonContainer } from "../../HeaderStyle";

export default function CancelNewFeedButton({ isDesktop }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(reset());
  };

  return (
    <CancelButtonContainer isDesktop={isDesktop}>
      <Tooltip title="Cancel">
        <StyledIconButton onClick={onClick}>
          <HighlightOffIcon fontSize="large" />
        </StyledIconButton>
      </Tooltip>
    </CancelButtonContainer>
  );
}
