import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedArticleCategoryTab } from "@/__generated__/graphql.ts";

export const getTabsListTheme = (
  theme?: ComponentSharedArticleCategoryTab | null,
) =>
  getThemeStyle([
    ["--active-tab-background", theme?.activeBgColor],
    ["--active-tab-border", theme?.activeBorderColor],
    ["--active-tab-text", theme?.activeColor],
    ["--tab-background", theme?.bgColor],
    ["--tab-border", theme?.borderColor],
    ["--tab-text", theme?.color],
  ]);
