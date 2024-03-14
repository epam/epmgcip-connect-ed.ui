import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getInformationSectionTheme = (
  theme?: ComponentSharedColor | null,
) =>
  getThemeStyle([
    ["--section-background", theme?.bgColor],
    ["--section-color", theme?.color],
  ]);
