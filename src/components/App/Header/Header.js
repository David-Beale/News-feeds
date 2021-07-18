import React from "react";

import SignOutButton from "./Components/SignOutButton/SignOutButton";
import AddNewFeedButton from "./Components/AddNewFeedButton/AddNewFeedButton";
import { HeaderContainer } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderContainer>
      <AddNewFeedButton />
      <SignOutButton />
    </HeaderContainer>
  );
}
