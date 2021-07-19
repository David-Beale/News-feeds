import React from "react";
import { useSelector } from "react-redux";
import NewFeedStartMenu from "./NewFeedStartMenu/NewFeedStartMenu";
import NewFeedOptions from "./NewFeedOptions/NewFeedOptions";
import NewFeedPreview from "./NewFeedPreview/NewFeedPreview";

export default function NewFeedMenus() {
  const menu = useSelector(({ addFeed }) => addFeed.menu);
  return (
    <>
      {
        {
          start: <NewFeedStartMenu />,
          options: <NewFeedOptions />,
          preview: <NewFeedPreview />,
        }[menu]
      }
    </>
  );
}
