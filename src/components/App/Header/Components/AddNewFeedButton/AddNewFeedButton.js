import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { enableAddFeed } from "../../../../../redux/addFeed";
import { StyledIconButton } from "../../HeaderStyle";

export default function AddNewFeedButton() {
  const dispatch = useDispatch();

  const enable = () => {
    dispatch(enableAddFeed());
  };

  return (
    <Tooltip title="Add new feed">
      <StyledIconButton onClick={enable}>
        <AddCircleOutlineIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
