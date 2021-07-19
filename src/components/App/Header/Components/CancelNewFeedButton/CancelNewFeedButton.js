import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { removeHtml } from "../../../../../redux/addFeed";
import { StyledIconButton, AlignLeftContainer } from "../../HeaderStyle";

export default function CancelNewFeedButton() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeHtml());
  };
  return (
    <AlignLeftContainer>
      <Tooltip title="Cancel">
        <StyledIconButton onClick={onClick}>
          <HighlightOffIcon fontSize="large" />
        </StyledIconButton>
      </Tooltip>
    </AlignLeftContainer>
  );
}