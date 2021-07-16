import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { StyledIconButton } from "../../HeaderStyle";

export default function AddNewFeedButton() {
  const [enabled, setEnabled] = useState(false);
  const onClick = () => {
    setEnabled(!enabled);
  };
  return (
    <Tooltip title="Add new feed">
      <StyledIconButton enabled={enabled ? 1 : 0} onClick={onClick}>
        <AddCircleOutlineIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
