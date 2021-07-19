import React from "react";
import { useSelector } from "react-redux";

import SignOutButton from "./Components/SignOutButton/SignOutButton";
import AddNewFeedButton from "./Components/AddNewFeedButton/AddNewFeedButton";
import CancelNewFeedButton from "./Components/CancelNewFeedButton/CancelNewFeedButton";
import NewFeedInstructions from "./Components/NewFeedInstructions/NewFeedInstructions";
import { HeaderContainer } from "./HeaderStyle";

export default function Header() {
  const enabled = useSelector(({ addFeed }) => addFeed.showHtml);
  return (
    <HeaderContainer>
      {!enabled ? (
        <AddNewFeedButton />
      ) : (
        <>
          <CancelNewFeedButton />
          <NewFeedInstructions />
        </>
      )}
      <SignOutButton />
    </HeaderContainer>
  );
}
