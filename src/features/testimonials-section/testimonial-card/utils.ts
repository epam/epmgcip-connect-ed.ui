import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";

export const getTestimonialCardTheme = (theme?: ComponentSharedColor) =>
  getThemeStyle([
    ["--background-color", theme?.bgColor],
    ["--text-color", theme?.color],
  ]);
