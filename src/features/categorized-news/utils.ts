import { getThemeStyle } from "@/utils/get-theme-style.ts";
import {
  ArticleCategoryEntity,
  ArticleEntity,
} from "@/__generated__/graphql.ts";

export const getCategorizedNewsTabsMap = (tabs?: ArticleCategoryEntity[]) =>
  tabs?.reduce<Map<string, ArticleEntity[]>>((accumulator, tab) => {
    const slug = tab?.attributes?.slug as string;
    if (slug) {
      accumulator.set(slug, tab?.attributes?.articles?.data ?? []);
    }

    return accumulator;
  }, new Map());

export const getCategorizedNewsTheme = () =>
  getThemeStyle([
    // TODO: Add theme when it's added from the BE side
  ]);
