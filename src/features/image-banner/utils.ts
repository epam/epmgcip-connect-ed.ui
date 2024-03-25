import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedImageCard } from "@/__generated__/graphql.ts";

export const getImageBannerTheme = (data?: ComponentSharedImageCard | null) =>
  getThemeStyle([
    ["--background-color", data?.cardBgColor],
    ["--text-color", data?.cardColor],
    ["--action-color", data?.linkColor],
  ]);
