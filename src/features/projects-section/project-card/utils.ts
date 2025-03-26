import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getProjectCardTheme = (data?: Maybe<Theme>) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
    // TODO: check action color
    // ["--action-color", data?.linkColor],
  ]);
