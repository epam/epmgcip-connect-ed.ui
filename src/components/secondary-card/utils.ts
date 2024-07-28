import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { SecondaryBannerFragmentFragment } from "@/__generated__/graphql.ts";

export const getWavyCardTheme = (data?: SecondaryBannerFragmentFragment) =>
  getThemeStyle([["--background-color", data?.secondaryBannerBackgroundColor]]);
