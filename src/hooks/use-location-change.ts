import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useLocationChange = (callback: () => void) => {
  const pathname = usePathname();

  useEffect(() => {
    callback();
  }, [pathname, callback]);
};
