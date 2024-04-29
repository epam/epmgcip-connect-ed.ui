import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe } from "@/__generated__/graphql.ts";

export const getExpandableCardTheme = (
  theme?: { cardColor?: Maybe<string>; cardBgColor?: Maybe<string> },
  action?: { color?: Maybe<string> },
) =>
  getThemeStyle([
    ["--content-color", theme?.cardBgColor],
    ["--text-color", theme?.cardColor],
    ["--action-color", action?.color],
  ]);
