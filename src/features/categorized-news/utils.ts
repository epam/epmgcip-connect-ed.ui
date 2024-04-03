import { getThemeStyle } from "@/utils/get-theme-style.ts";
import {
  ArticleCategoryEntity,
  ArticleEntity,
  ComponentSharedArticleCategoryTab,
} from "@/__generated__/graphql.ts";

export const getTabsMap = (tabs?: ArticleCategoryEntity[]) =>
  tabs?.reduce<Map<string, ArticleEntity[]>>((accumulator, tab) => {
    const slug = tab?.attributes?.slug as string;
    if (slug) {
      accumulator.set(slug, [...(tab?.attributes?.articles?.data ?? [])]);
    }

    return accumulator;
  }, new Map());

export const getCategorizedNewsTheme = () => getThemeStyle([]);

export const getCategorizedNewsTabsTheme = (
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
