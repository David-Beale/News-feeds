import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import DesktopCard from "./DesktopCard/DesktopCard";
import MobileCard from "./MobileCard/MobileCard";

export default function Card({ headline }) {
  const isDesktop = useMediaQuery("(min-width:700px)");
  return (
    <>
      {isDesktop ? (
        <DesktopCard headline={headline} />
      ) : (
        <MobileCard headline={headline} />
      )}
    </>
  );
}
