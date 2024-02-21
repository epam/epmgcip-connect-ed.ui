import { RefObject, useEffect } from "react";
import { getApplicationRoot } from "@/utils/get-application-root.ts";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: Event) => void,
  isInTheDOM?: boolean,
): void {
  useEffect(() => {
    const applicationRoot = getApplicationRoot();

    const handleClickOutside = (event: Event) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    if (isInTheDOM || typeof isInTheDOM === "undefined") {
      applicationRoot.addEventListener("click", handleClickOutside);
    } else {
      applicationRoot.removeEventListener("click", handleClickOutside);
    }

    return () => {
      applicationRoot.removeEventListener("click", handleClickOutside);
    };
  }, [isInTheDOM, callback, ref]);
}
