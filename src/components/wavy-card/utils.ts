import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getWavyCardStyle = (theme?: string) =>
  getThemeStyle([["--main-color", theme]]);
