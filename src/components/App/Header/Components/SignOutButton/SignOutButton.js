import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../../redux/auth";

import { StyledSignOutButton } from "./SignOutStyle";

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
    <StyledSignOutButton onClick={onSignOut}>Sign Out</StyledSignOutButton>
  );
}
