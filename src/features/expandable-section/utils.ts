import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedColor, Maybe } from "@/__generated__/graphql.ts";

export const getExpandableSectionTheme = (
  theme?: Maybe<ComponentSharedColor>,
) =>
  getThemeStyle([
    ["--section-background", theme?.BgColor],
    ["--section-color", theme?.Color],
  ]);
