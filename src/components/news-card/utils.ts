import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe } from "@/__generated__/graphql.ts";

export const getNewsCardTheme = (
  theme?: { color?: Maybe<string>; bgColor?: Maybe<string> },
  action?: { color?: Maybe<string> },
) => {
  return getThemeStyle([
    ["--content-color", theme?.bgColor],
    ["--text-color", theme?.color],
    ["--action-color", action?.color],
  ]);
};
