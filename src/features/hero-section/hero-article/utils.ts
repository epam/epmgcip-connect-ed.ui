import { ComponentSharedOverlayBlock } from "@/__generated__/graphql.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getHeroArticleTheme = (
  card?: ComponentSharedOverlayBlock | null,
) =>
  getThemeStyle([
    ["--article-color", card?.bgColor],
    ["--text-color", card?.color],
  ]);
