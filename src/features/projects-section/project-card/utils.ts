import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedGridBlock } from "@/__generated__/graphql.ts";

export const getProjectCardTheme = (data?: ComponentSharedGridBlock) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
    ["--action-color", data?.linkColor],
  ]);
