import { useMemo } from "react";

export const useColumns = () => {
  const columns = useMemo(() => {
    const deleteCol = {
      width: 130,
      minWidth: 80,
      name: "Delete Feed",
      data: "id",
    };
    const failCol = {
      width: 130,
      minWidth: 80,
      name: "Feed active",
      data: "scrapeFail",
    };
    const lastScrapeCol = {
      width: 150,
      minWidth: 130,
      name: "Last scraped",
      data: "lastScrape",
    };
    const nameCol = {
      width: 300,
      minWidth: 200,
      name: "Feed name",
      data: "name",
    };

    return [nameCol, lastScrapeCol, failCol, deleteCol].map((col, index) => {
      return { ...col, color: index % 2 === 0 ? 1 : 2 };
    });
  }, []);
  return columns;
};
