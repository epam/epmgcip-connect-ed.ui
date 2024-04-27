import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useTabsParams = (
  tabParamName: string,
  initialTab: string,
  isTabValueInList: (tabValue: string) => boolean,
) => {
  const [params, setParams] = useSearchParams();

  const tabValue = params.get(tabParamName) ?? "";
  const shouldChangeTab =
    !tabValue || (!!tabValue && !isTabValueInList(tabValue));
  const currentTab = shouldChangeTab ? initialTab : tabValue;

  const handleChange = useCallback(
    (value: string) => {
      setParams(
        previousParams => {
          const newParams = new URLSearchParams(previousParams);
          newParams.set(tabParamName, value);
          return newParams;
        },
        { replace: true },
      );
    },
    [tabParamName, setParams],
  );

  useEffect(() => {
    if (shouldChangeTab) {
      handleChange(currentTab);
    }
  }, [shouldChangeTab, currentTab, handleChange]);

  return [currentTab, handleChange] as const;
};
