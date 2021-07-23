import React from "react";
import { useSelector } from "react-redux";
import { selectAllScrapers } from "../../../../../redux/scrapers";
import MobileCard from "./MobileCard/MobileCard";

export default function MobileCards() {
  const scrapers = useSelector(selectAllScrapers);
  return (
    <>
      {scrapers.map((scraper) => (
        <MobileCard key={scraper.id} scraper={scraper} />
      ))}
    </>
  );
}
