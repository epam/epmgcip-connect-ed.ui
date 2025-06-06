import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getImageBannerTheme = (data?: Maybe<Theme>) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
    // TODO: decide how we display links
    // ["--action-color", data?.linkColor],
  ]);
