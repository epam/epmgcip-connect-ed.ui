import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Maybe, Theme } from "@/__generated__/graphql.ts";

export const getWavyCardStyle = (theme?: Maybe<Theme>) =>
  getThemeStyle([["--main-color", theme?.bgColor]]);
