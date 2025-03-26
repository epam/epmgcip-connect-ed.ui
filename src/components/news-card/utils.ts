import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getNewsCardTheme = (theme?: Maybe<Theme>) => {
  return getThemeStyle([
    ["--content-color", theme?.bgColor],
    ["--text-color", theme?.color],
    //TODO: check what should be done with links
    // ["--action-color", theme?.LinkColor],
  ]);
};
