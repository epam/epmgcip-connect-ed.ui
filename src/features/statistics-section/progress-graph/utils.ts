import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Theme } from "@/__generated__/graphql.ts";

export const clampToPercentage = (value: number): number => {
  if (Number.isNaN(value) || value === null || value === undefined) {
    return 0;
  }
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
};

export const getGraphTheme = (theme?: Theme) =>
  getThemeStyle([
    ["--graph-color", theme?.bgColor],
    ["--text-color", theme?.color],
  ]);
