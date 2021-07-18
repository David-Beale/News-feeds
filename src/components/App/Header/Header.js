import React from "react";

import SignOutButton from "./Components/SignOutButton/SignOutButton";
import AddNewFeedButton from "./Components/AddNewFeedButton/AddNewFeedButton";
import RefreshFeedButton from "./Components/RefreshFeedButton/RefreshFeedButton";
import { HeaderContainer } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderContainer>
      <AddNewFeedButton />
      {/* <RefreshFeedButton /> */}
      <SignOutButton />
    </HeaderContainer>
  );
}
