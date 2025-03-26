import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getTestimonialCardTheme = (theme?: Maybe<Theme>) =>
  getThemeStyle([
    ["--background-color", theme?.bgColor],
    ["--text-color", theme?.color],
  ]);
