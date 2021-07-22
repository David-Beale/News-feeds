import React from "react";

import Header from "./Header/Header";
import NewFeedMenus from "./NewFeed/NewFeedMenus";
import SiteBody from "./SiteBody/SiteBody";

export default function App() {
  return (
    <>
      <Header />
      <NewFeedMenus />
      <SiteBody />
    </>
  );
}
