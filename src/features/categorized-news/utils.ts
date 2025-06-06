import { ComponentSharedTab } from "@/features/categorized-news/types.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getCategorizedNewsTabsMap = (tabs?: Maybe<ComponentSharedTab[]>) =>
  tabs?.reduce<Map<string, ComponentSharedTab>>((accumulator, tab) => {
    const documentId = tab?.documentId;
    if (documentId) {
      accumulator.set(documentId, tab);
    }

    return accumulator;
  }, new Map());

export const getCategorizedNewsTheme = (theme?: Maybe<Theme>) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
