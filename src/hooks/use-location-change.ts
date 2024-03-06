import { useEffect } from "react";
import { useLocation } from "react-router";

export const useLocationChange = (callback: () => void) => {
  const location = useLocation();

  useEffect(() => {
    callback();
  }, [location, callback]);
};
