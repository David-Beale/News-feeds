import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { enableAddFeed } from "../../../../../redux/addFeed";
import { StyledIconButton } from "../../HeaderStyle";

export default function AddNewFeedButton() {
  const dispatch = useDispatch();
  const enabled = useSelector(({ addFeed }) => addFeed.enabled);

  const onClick = () => {
    dispatch(enableAddFeed(enabled));
  };
  return (
    <Tooltip title="Add new feed">
      <StyledIconButton enabled={enabled ? 1 : 0} onClick={onClick}>
        <AddCircleOutlineIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
