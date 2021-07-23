import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { enableEditFeed } from "../../../../../redux/scrapers";
import { StyledIconButton } from "../../HeaderStyle";

export default function EditFeedsButton() {
  const dispatch = useDispatch();

  const enable = () => {
    dispatch(enableEditFeed());
  };

  return (
    <Tooltip title="Edit feeds">
      <StyledIconButton onClick={enable}>
        <EditIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
