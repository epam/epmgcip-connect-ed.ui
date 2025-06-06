import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { TabTheme } from "@/__generated__/graphql.ts";

export const getTabsListTheme = (theme?: TabTheme | null) =>
  getThemeStyle([
    ["--active-tab-background", theme?.ActiveBgColor],
    ["--active-tab-border", theme?.ActiveBorderColor],
    ["--active-tab-text", theme?.ActiveColor],
    ["--tab-background", theme?.BgColor],
    ["--tab-border", theme?.BorderColor],
    ["--tab-text", theme?.Color],
  ]);
