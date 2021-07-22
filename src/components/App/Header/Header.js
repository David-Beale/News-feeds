import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";

import SignOutButton from "./Components/SignOutButton/SignOutButton";
import AddNewFeedButton from "./Components/AddNewFeedButton/AddNewFeedButton";
import CancelNewFeedButton from "./Components/CancelNewFeedButton/CancelNewFeedButton";
import NewFeedInstructions from "./Components/NewFeedInstructions/NewFeedInstructions";
import { HeaderContainer } from "./HeaderStyle";

export default function Header() {
  const enabled = useSelector(({ addFeed }) => addFeed.showHtml);
  const isDesktop = useMediaQuery("(min-width:700px)");
  return (
    <HeaderContainer isDesktop={isDesktop}>
      {!enabled ? (
        <AddNewFeedButton />
      ) : (
        <>
          <CancelNewFeedButton isDesktop={isDesktop} />
          <NewFeedInstructions isDesktop={isDesktop} />
        </>
      )}
      <SignOutButton />
    </HeaderContainer>
  );
}
