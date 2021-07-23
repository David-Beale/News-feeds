import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";

import SignOutButton from "./Components/SignOutButton/SignOutButton";
import AddNewFeedButton from "./Components/AddNewFeedButton/AddNewFeedButton";
import CancelNewFeedButton from "./Components/CancelNewFeedButton/CancelNewFeedButton";
import NewFeedInstructions from "./Components/NewFeedInstructions/NewFeedInstructions";
import EditFeedsButton from "./Components/EditFeedsButton/EditFeedsButton";
import CancelEditFeedsButton from "./Components/CancelEditFeedsButton/CancelEditFeedsButton";

import { HeaderContainer, FeedMenuContainer } from "./HeaderStyle";

export default function Header() {
  const showHtml = useSelector(({ addFeed }) => addFeed.showHtml);
  const showEditFeeds = useSelector(({ scrapers }) => scrapers.editFeeds);
  const isDesktop = useMediaQuery("(min-width:700px)");
  return (
    <HeaderContainer isDesktop={isDesktop}>
      {showHtml ? (
        <>
          <CancelNewFeedButton isDesktop={isDesktop} />
          <NewFeedInstructions isDesktop={isDesktop} />
        </>
      ) : showEditFeeds ? (
        <CancelEditFeedsButton />
      ) : (
        <FeedMenuContainer>
          <EditFeedsButton />
          <AddNewFeedButton />
          <SignOutButton />
        </FeedMenuContainer>
      )}
    </HeaderContainer>
  );
}
