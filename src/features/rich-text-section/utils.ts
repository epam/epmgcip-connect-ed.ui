import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getRichTextTheme = (theme?: Maybe<Theme>) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
