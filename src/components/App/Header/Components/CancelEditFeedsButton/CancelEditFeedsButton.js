import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { disabledEditFeed } from "../../../../../redux/scrapers";
import { StyledIconButton, CancelButtonContainer } from "../../HeaderStyle";

export default function CancelEditFeedsButton() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(disabledEditFeed());
  };

  return (
    <CancelButtonContainer isDesktop={false}>
      <Tooltip title="Cancel">
        <StyledIconButton onClick={onClick}>
          <HighlightOffIcon fontSize="large" />
        </StyledIconButton>
      </Tooltip>
    </CancelButtonContainer>
  );
}
