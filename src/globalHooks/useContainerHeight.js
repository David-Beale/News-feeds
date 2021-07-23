import { useState, useCallback } from "react";

import { useWindowResize } from "./useWindowResize";

export const useContainerHeight = (selector) => {
  const [height, setHeight] = useState(0);
  //Set the height of the list to be equal to the height of the container
  const updateHeight = useCallback(() => {
    document.querySelector(selector) &&
      setHeight(document.querySelector(selector).offsetHeight);
  }, [selector]);
  useWindowResize(updateHeight);
  return height;
};
