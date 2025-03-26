import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Theme } from "@/__generated__/graphql.ts";

export const getInformationSectionTheme = (theme?: Theme | null) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
