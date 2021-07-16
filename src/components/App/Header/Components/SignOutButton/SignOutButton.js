import React from "react";
import { useAuth } from "../../../../AuthLayer/useAuth";

import { SignOutButton, SignOutContainer } from "./SignOutStyle";

export default function LogoutButton() {
  const { signOut } = useAuth();
  const onSignOut = async () => {
    try {
      await signOut();
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
