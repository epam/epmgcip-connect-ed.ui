import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Theme } from "@/__generated__/graphql.ts";

export const getWavyCardTheme = (data?: Theme | null) =>
  getThemeStyle([["--background-color", data?.bgColor]]);
