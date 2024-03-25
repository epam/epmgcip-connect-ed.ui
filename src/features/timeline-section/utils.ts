import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";

export const getTimelineSectionTheme = (theme?: ComponentSharedColor) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
