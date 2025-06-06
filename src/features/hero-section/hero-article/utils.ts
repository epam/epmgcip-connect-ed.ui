import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getHeroArticleTheme = (card?: Maybe<Theme>) =>
  getThemeStyle([
    ["--article-color", card?.bgColor],
    ["--text-color", card?.color],
  ]);
