import { getThemeStyle } from "@/utils/get-theme-style.ts";
import {
  ComponentSharedTabCardTheme,
  ComponentSharedTabs,
  Maybe,
} from "@/__generated__/graphql.ts";

export const getCategorizedNewsTabsMap = (
  tabs?: Maybe<ComponentSharedTabs[]>,
) =>
  tabs?.reduce<Map<string, ComponentSharedTabs>>((accumulator, tab) => {
    const slug = tab?.id;
    if (slug) {
      accumulator.set(slug, tab);
    }

    return accumulator;
  }, new Map());

export const getCategorizedNewsTheme = (
  theme?: Maybe<ComponentSharedTabCardTheme>,
) =>
  getThemeStyle([
    ["--section-background", theme?.BgColor],
    ["--section-color", theme?.Color],
  ]);
