"use client";

import { useCallback, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export const useTabsParams = (
  tabParamName: string,
  initialTab: string,
  isTabValueInList: (tabValue: string) => boolean,
) => {
  const pathname = usePathname();
  const params = useSearchParams();

  const tabValue = params.get(tabParamName) ?? "";
  const shouldChangeTab =
    !tabValue || (!!tabValue && !isTabValueInList(tabValue));
  const currentTab = shouldChangeTab ? initialTab : tabValue;

  const handleChange = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams(params);
      newParams.set(tabParamName, value);
      window.history.replaceState(
        null,
        "",
        `${pathname}?${newParams.toString()}`,
      );
    },
    [tabParamName, pathname, params],
  );

  useEffect(() => {
    if (shouldChangeTab) {
      handleChange(currentTab);
    }
  }, [shouldChangeTab, currentTab, handleChange]);

  return [currentTab, handleChange] as const;
};
