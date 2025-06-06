import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ButtonTheme, Maybe, Theme } from "@/__generated__/graphql.ts";

export const getExpandableCardTheme = (
  theme?: Maybe<Theme>,
  collapseLink?: Maybe<Theme>,
  expandLink?: Maybe<Theme>,
) =>
  getThemeStyle([
    ["--content-color", theme?.color],
    ["--text-color", theme?.bgColor],
    ["--action-color", collapseLink?.color ?? expandLink?.color],
  ]);

export const convertThemeToButtonTheme = (
  theme?: Maybe<Theme>,
): Omit<ButtonTheme, "documentId"> => ({
  BackgrondColor: theme?.bgColor,
  OutlineColor: theme?.bgColor,
  FontColor: theme?.color,
});
