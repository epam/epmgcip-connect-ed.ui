import { ComponentSharedGridBlock } from "@/__generated__/graphql.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getProjectCardTheme = (data?: ComponentSharedGridBlock) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
    ["--action-color", data?.linkColor],
  ]);
