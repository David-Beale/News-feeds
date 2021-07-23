import { useState, useCallback } from "react";

import { useWindowResize } from "./useWindowResize";

export const useContainerWidth = (selector) => {
  const [width, setWidth] = useState(0);
  //Set the width of the list to be equal to the width of the container
  const updateWidth = useCallback(() => {
    document.querySelector(selector) &&
      setWidth(document.querySelector(selector).offsetWidth);
  }, [selector]);
  useWindowResize(updateWidth);
  return width;
};
