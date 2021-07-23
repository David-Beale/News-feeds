import { useEffect } from "react";
//window resize handler
//pass in a callback (memoized using a useCallback) to run whenever the window size changes

export const useWindowResize = (callback) => {
  useEffect(() => {
    callback();
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [callback]);
};
