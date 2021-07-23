import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../../redux/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Tooltip } from "@material-ui/core";
import { StyledIconButton } from "../../HeaderStyle";

export default function SignOutButton() {
  const dispatch = useDispatch();
  const onSignOut = async () => {
    try {
      await dispatch(signOut());
    } catch (error) {
      console.log("failed to logout");
    }
  };
  return (
    <Tooltip title="Sign Out">
      <StyledIconButton onClick={onSignOut}>
        <ExitToAppIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
}
