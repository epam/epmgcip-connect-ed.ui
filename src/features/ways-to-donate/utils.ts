import { WaysToDonateTab } from "@/features/ways-to-donate/types.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getWaysToDonateTabsMap = (tabs: WaysToDonateTab[]) =>
  tabs?.reduce<Map<string, WaysToDonateTab>>((accumulator, tab) => {
    const slug = tab?.documentId as string;

    if (slug) {
      accumulator.set(slug, tab);
    }

    return accumulator;
  }, new Map());

export const getWaysToDonateTheme = (theme?: Maybe<Theme>) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
