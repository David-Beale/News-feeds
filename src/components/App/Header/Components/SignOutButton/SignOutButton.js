import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../../redux/auth";

import { SignOutButton, SignOutContainer } from "./SignOutStyle";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const onSignOut = async () => {
    try {
      await dispatch(signOut());
    } catch (error) {
      console.log("failed to logout");
    }
  };
  return (
    <SignOutContainer>
      <SignOutButton onClick={onSignOut}>Sign Out</SignOutButton>
    </SignOutContainer>
  );
}
